import "./bootstrap";

import '../sass/app.scss'

import "@protonemedia/laravel-splade/dist/style.css";

import * as bootstrap from 'bootstrap';

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { renderSpladeApp, SpladePlugin } from "@protonemedia/laravel-splade";

const el = document.getElementById("app");

createApp({
    render: renderSpladeApp({ el })
})
    .use(SpladePlugin, {
        "max_keep_alive": 10,
        "transform_anchors": false,
        "progress_bar": true
    })
    .mount(el);
