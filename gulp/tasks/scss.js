import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import groupMediaQueries from 'gulp-group-css-media-queries';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import sourcemaps from "gulp-sourcemaps";
import purgecss from 'gulp-purgecss';

import { filePaths } from '../config/paths.js';
import { plugins } from '../config/plugins.js';
import { logger } from "../config/Logger.js";

const sass = gulpSass(dartSass);

const scss = (isBuild) => {
	const webpConfig = {
		webpClass: '.webp',
		noWebpClass: '.no-webp',
	};

	return gulp.src(filePaths.src.scss)
    .pipe(logger.handleError('SCSS'))

		.pipe(plugins.if(!isBuild, sourcemaps.init()))
		.pipe(sass({ outputStyle: 'expanded' }, null))
		.pipe(plugins.replace(/@img\//g, '../images/'))

		/** Группировка медиа-запросов только для production */
		.pipe(plugins.if(isBuild, groupMediaQueries()))

		.pipe(plugins.if(isBuild, webpCss(webpConfig)))
		.pipe(plugins.if(isBuild, postcss([autoprefixer(), postcssPresetEnv()])))

		/** Удаление неиспользуемого CSS только для production */
		.pipe(
			plugins.if(
				isBuild,
				purgecss({
					content: [
						'./src/**/*.html',
						'./src/js/**/*.js',
					],
					safelist: {
						standard: [
							/^(container(-fluid)?|row|col-(sm|md|lg|xl)?-\d+|col|offset-\d+)$/, // Bootstrap grid
							/^(show|collapse|collapsing|modal|fade|active|open)$/,
							/^(dropdown|dropdown-menu|dropdown-item|show)$/,
							/^swiper(-|__|\b).*/, // Swiper classes
							/^splide(.*)/, // Splide classes
							/^aos(-|\b).*/, // AOS classes
							/^webp$|^no-webp$/,
							/^is-.*$/,
							/^js-.*$/,
						],
						deep: [
							/::placeholder/,
							/::selection/,
						],
					},
				})
			)
		)

		/** Раскомментировать если нужен не сжатый дубль файла стилей */
		// .pipe(gulp.dest(filePaths.build.css))

		.pipe(plugins.if(isBuild, cleanCss()))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(plugins.if(!isBuild, sourcemaps.write('.')))
		.pipe(gulp.dest(filePaths.build.css))
		.pipe(plugins.browserSync.stream());
};

export { scss };
