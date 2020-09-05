import React from "react";
import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Upload } from "../index";
import { color, typography } from "../../shared/styles";

describe("test Upload component", () => {
    it('render correctly', () => {
        const wrapper = render(
            <Upload />
        );
        expect(wrapper).toMatchSnapshot();
    });
})
