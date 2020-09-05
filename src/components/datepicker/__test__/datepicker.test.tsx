import React from "react";
import { render, cleanup } from "@testing-library/react";
import { DatePicker } from "../index";
import { fireEvent } from "@testing-library/dom";

describe("test DatePicker component", () => {
    it('render correctly', () => {
        const wrapper = render(
            <DatePicker />
        );
        expect(wrapper).toMatchSnapshot();
    });
})
