import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent } from "@testing-library/dom";
import { Button, ButtonProps } from '../index';
const defaultProps = {
    onClick: jest.fn(),
    className: 'testprops',
};
const testProps: ButtonProps = {
    appearance: 'primary',
    size: 'small',
    className: 'testprops',
};
const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
};

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(
            <Button data-testid="button" {...defaultProps}>
                hello
            </Button>
        );
        const ele = wrapper.getByTestId('button');
        expect(ele).toBeInTheDocument();
        //正确渲染文本
        const text = wrapper.getByText('hello');
        expect(text).toBeTruthy();

        //button标签
        expect(ele.tagName).toEqual('BUTTON');
        expect(ele).not.toHaveAttribute('isdisabled');
        expect(ele).not.toHaveAttribute('isLinked');

        //正常添加classname
        expect(ele.getAttribute('class')?.split(' ').includes('testprops')).toEqual(
            true
        );

        //正常click
        fireEvent.click(ele);
        expect(defaultProps.onClick).toHaveBeenCalled();

        //span正常显示
        expect(ele.getElementsByTagName('span')).toBeTruthy();
    });

    it('should render a link', () => {
        const wrapper = render(
            <Button data-testid="button" isLink href="/">
                linkbutton
            </Button>
        );
        const ele = wrapper.getByTestId('button');
        expect(ele).toBeInTheDocument();
        expect(ele.tagName).toEqual('A');
        expect(ele).toHaveAttribute('href', '/');
    });

    it('should render disabled ', () => {
        const wrapper = render(
            <Button data-testid="button" {...disabledProps}>
                hello
            </Button>
        );
        const ele = wrapper.getByTestId('button');
        expect(ele).toBeInTheDocument();
        fireEvent.click(ele);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });

    it('should render loading ', () => {
        const wrapper = render(
            <Button data-testid="button" isLoading>
                hello
            </Button>
        );
        const ele = wrapper.getByTestId('button');
        expect(ele).toBeInTheDocument();
        const text = wrapper.getByText('hello');
        fireEvent.click(ele);
        expect(disabledProps.onClick).not.toHaveBeenCalled();

        const wrapper2 = render(
            <Button data-testid="button" isLoading loadingText="yehuozhili">
                hello
            </Button>
        );
        const text2 = wrapper2.getByText('yehuozhili');
        expect(text2).toBeTruthy();
    });

    it('should isUnclickable ', () => {
        const wrapper = render(
            <Button data-testid="button" isUnclickable>
                hello
            </Button>
        );
        const ele = wrapper.getByTestId('button');
        expect(ele).toBeInTheDocument();
        fireEvent.click(ele);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });
});
