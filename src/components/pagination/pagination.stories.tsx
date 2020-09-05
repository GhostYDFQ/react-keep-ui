import React from "react";
import { Pagination } from "./index";
import {
    withKnobs,
    text,
    boolean,
    color,
    select,
    number,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
    title: "组件/Pagination",
    component: Pagination,
    decorators: [withKnobs],
};

export const knobsPagination = () => (
    <Pagination
        defaultCurrent={number("defualtCurrent", 1)}
        total={number("total", 100)}
        barMaxSize={number("barMaxSize", 5)}
        pageSize={number("pageSize", 5)}
        callback={action("callback")}
    ></Pagination>
);
