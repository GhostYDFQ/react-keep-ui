import React from "react";
import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Pagination } from "../index";
import { color, typography } from "../../shared/styles";

describe("test Pagination component", () => {
    it('render correctly', () => {
        const wrapper = render(
            <Pagination />
        );
        expect(wrapper).toMatchSnapshot();
    });
})
