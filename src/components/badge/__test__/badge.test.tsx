import React from "react";
import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Badge, badgeBackground, badgeColor, BadgeProps } from "../index";

const testonClick = jest.fn();

const testThemeFunc = (status: BadgeProps['status']) => {
    cleanup();
    let wrapper = render(<Badge status={status}>111</Badge>);
    const text = wrapper.getByText("111");
};

describe("test Badge component", () => {
    it("should render default style", () => {
        let wrapper = render(<Badge>111</Badge>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render correct  attr", () => {
        let wrapper = render(
            <Badge className="testclass" onClick={testonClick}>
                attr
            </Badge>
        );
        const text = wrapper.getByText("attr");
        expect(text.className.includes("testclass")).toBeTruthy();
        fireEvent.click(text);
        expect(testonClick).toHaveBeenCalled();
    });

    it("should rende correct theme", () => {
        testThemeFunc("positive");
        testThemeFunc("warning");
        testThemeFunc("negative");
        testThemeFunc("neutral");
        testThemeFunc("error");
    });
});
