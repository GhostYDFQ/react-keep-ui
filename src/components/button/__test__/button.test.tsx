import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Button, ButtonProps, btnPadding } from '../index';
import { color, typography } from '../../shared/styles';
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

        //正常默认属性
        expect(ele).toHaveStyle(`background:${color.tertiary}`);
        expect(ele).toHaveStyle(`color: ${color.darkest}`);

        //正常大小
        expect(ele).toHaveStyle(`padding: ${btnPadding.medium}`);
        expect(ele).toHaveStyle(`font-size:${typography.size.s2}px`);
    });

    it('should render correct appearance', () => {
        // primary
        let wrapper = render(
            <Button data-testid="button" {...testProps}>
                hello
            </Button>
        );
        let ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`background:${color.primary}`);
        expect(ele).toHaveStyle(`color: ${color.lightest}`);
        cleanup();

        // inverseOutline
        wrapper = render(
            <Button data-testid="button" appearance="inverseOutline">
                hello
            </Button>
        );
        ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`box-shadow: ${color.lightest} 0 0 0 1px inset`);
        expect(ele).toHaveStyle(`color: ${color.lightest}`);
        cleanup();

        // inversePrimary
        wrapper = render(
            <Button data-testid="button" appearance="inversePrimary">
                hello
            </Button>
        );
        ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`background:${color.lightest}`);
        expect(ele).toHaveStyle(`color: ${color.primary}`);
        cleanup();

        // inverseSecondary
        wrapper = render(
            <Button data-testid="button" appearance="inverseSecondary">
                hello
            </Button>
        );
        ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`background:${color.lightest}`);
        expect(ele).toHaveStyle(`color: ${color.secondary}`);
        cleanup();

        // outline
        wrapper = render(
            <Button data-testid="button" appearance="outline">
                hello
            </Button>
        );
        ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`background:transparent`);
        expect(ele).toHaveStyle(`color: ${color.dark}`);
        cleanup();

        // primaryOutline
        wrapper = render(
            <Button data-testid="button" appearance="primaryOutline">
                hello
            </Button>
        );
        ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`box-shadow: ${color.primary} 0 0 0 1px inset`);
        expect(ele).toHaveStyle(`color: ${color.primary}`);
        cleanup();

        // secondary
        wrapper = render(
            <Button data-testid="button" appearance="secondary">
                hello
            </Button>
        );
        ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`background:${color.secondary}`);
        expect(ele).toHaveStyle(`color: ${color.lightest}`);
        cleanup();

        // secondaryOutline
        wrapper = render(
            <Button data-testid="button" appearance="secondaryOutline">
                hello
            </Button>
        );
        ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`box-shadow: ${color.secondary} 0 0 0 1px inset`);
        expect(ele).toHaveStyle(`color: ${color.secondary}`);
    });

    it('should render correct size ', () => {
        // small size
        let wrapper = render(
            <Button data-testid="button" {...testProps}>
                hello
            </Button>
        );
        let ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`padding: ${btnPadding.small}`);
        expect(ele).toHaveStyle(`font-size:${typography.size.s1}px`);
        cleanup();

        // medium size
        wrapper = render(
            <Button data-testid="button" {...testProps} size="medium">
                hello
            </Button>
        );
        ele = wrapper.getByTestId('button');
        expect(ele).toHaveStyle(`padding: ${btnPadding.medium}`);
        expect(ele).toHaveStyle(`font-size:${typography.size.s2}px`);
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
        expect(ele).toHaveStyle('cursor: not-allowed');
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
        expect(ele).toHaveStyle('cursor: progress');
        const text = wrapper.getByText('hello');
        expect(text).toHaveStyle('opacity: 0');
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
        expect(ele).toHaveStyle('pointer-events: none');
        fireEvent.click(ele);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });
});
