import React from "react";
import { render } from "@testing-library/react";
import { DatePicker } from "../index";

describe("test DatePicker component", () => {
    it('render correctly', () => {
        const wrapper = render(
            <DatePicker />
        );
        expect(wrapper).toMatchSnapshot();
    });
})
