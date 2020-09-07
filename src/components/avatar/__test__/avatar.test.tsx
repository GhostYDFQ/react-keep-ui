import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Avatar, AvatarSize } from "../index";

describe("test Avatar component", () => {
    it("it should render default avatar", () => {
        let wrapper = render(<Avatar data-testid="avatar-div"></Avatar>);
        expect(wrapper).toMatchSnapshot();
        let div = wrapper.getByTestId("avatar-div");
        expect(div).toBeInTheDocument();
        let username = wrapper.getByText("l");
        expect(username).toBeTruthy();
    });

    it("should correct loading", () => {
        let wrapper = render(<Avatar data-testid="avatar-div" isLoading></Avatar>);
        expect(wrapper).toMatchSnapshot();
        let div = wrapper.getByTestId("avatar-div");
        let svg = div.firstChild;
        expect(svg).toBeVisible();
        cleanup();

        wrapper = render(
            <Avatar data-testid="avatar-div" isLoading username="123" src="/" size="tiny"></Avatar>
        );
        div = wrapper.getByTestId("avatar-div");
        svg = div.firstChild;
        expect(svg).toBeVisible();
    });

    it("should correct img", () => {
        let wrapper = render(<Avatar data-testid="avatar-div" src="www.test.com"></Avatar>);
        let div = wrapper.getByTestId("avatar-div");
        let img = div.firstChild;
        expect(img.tagName).toEqual("IMG");
        expect(img).toHaveAttribute("src", "www.test.com");
        expect(img).toHaveAttribute("alt", "loading");
        cleanup();

        wrapper = render(
            <Avatar data-testid="avatar-div" src="www.yezun.xyz" username="yezun"></Avatar>
        );
        div = wrapper.getByTestId("avatar-div");
        img = div.firstChild;
        expect(img).toHaveAttribute("src", "www.yezun.xyz");
        expect(img).toHaveAttribute("alt", "yezun");
    });

    it("should render correct username", () => {
        let wrapper = render(<Avatar data-testid="avatar-div" username="yezun"></Avatar>);
        expect(wrapper).toMatchSnapshot();
        let div = wrapper.getByTestId("avatar-div");
        let username = wrapper.getByText("y");
        expect(username).toBeVisible();
        cleanup();

        wrapper = render(<Avatar username="中文汉字"></Avatar>);
        username = wrapper.getByText("中");
        expect(username).toBeTruthy();
    });
});
