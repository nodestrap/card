// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, children, 
// rules:
variants, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { stripoutFocusableElement, } from '@nodestrap/stripouts';
import { 
// utilities:
setRef, } from '@nodestrap/utilities';
// nodestrap components:
import { 
// react components:
Element, } from '@nodestrap/element';
import { 
// hooks:
usesSizeVariant, defaultBlockOrientationRuleOptions, normalizeOrientationRule, usesOrientationRule, useOrientationVariant, usesBorder, usesBorderStroke, expandBorderStroke, usesBorderRadius, expandBorderRadius, usesAnim, } from '@nodestrap/basic';
import { 
// styles:
usesIndicatorLayout, usesIndicatorVariants, usesIndicatorStates, Indicator, } from '@nodestrap/indicator';
import { 
// hooks:
usesBorderAsContainer, usesBorderAsSeparatorBlock, usesBorderAsSeparatorInline, } from '@nodestrap/container';
import { 
// styles:
usesContentMedia, usesContentLayout, usesContentVariants, } from '@nodestrap/content';
// hooks:
// layouts:
export const defaultOrientationRuleOptions = defaultBlockOrientationRuleOptions;
export const useCardVariant = (props) => {
    return {
        class: props.cardStyle ? props.cardStyle : null,
    };
};
// styles:
const headerElm = ['header', '.header'];
const footerElm = ['footer', '.footer'];
const bodyElm = '.body';
export const usesCardItemLayout = () => {
    return composition([
        imports([
            // layouts:
            usesIndicatorLayout(),
            usesContentLayout(),
        ]),
        layout({
            // layouts:
            display: 'block',
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'item')), // apply general cssProps starting with item***
        }),
    ]);
};
export const usesCardCaptionLayout = () => {
    return composition([
        layout({
            // sizes:
            // default card's items height are unresizeable (excepts for the card's body):
            flex: [[0, 1, 'auto']],
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'caption')), // apply general cssProps starting with caption***
        }),
    ]);
};
export const usesCardHeaderLayout = () => {
    return composition([
        layout({
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'header')), // apply general cssProps starting with header***
        }),
    ]);
};
export const usesCardFooterLayout = () => {
    return composition([
        layout({
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'footer')), // apply general cssProps starting with footer***
        }),
    ]);
};
export const usesCardBodyLayout = () => {
    return composition([
        layout({
            // sizes:
            // default card's body height is resizeable, ensuring footers are aligned to the bottom:
            flex: [[1, 1, 'auto']],
            // scrolls:
            overflow: 'auto',
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'body')), // apply general cssProps starting with body***
        }),
    ]);
};
export const usesCardLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    // dependencies:
    // colors:
    const [border] = usesBorder();
    // animations:
    const [anim, animRefs] = usesAnim();
    // borders:
    const [borderStroke] = usesBorderStroke();
    const [borderRadius] = usesBorderRadius();
    return composition([
        imports([
            // resets:
            stripoutFocusableElement(),
            // colors:
            border(),
            // borders:
            borderStroke(),
            borderRadius(),
            usesBorderAsContainer(options),
            // animations:
            anim(),
        ]),
        layout({
            // layouts:
            // display        : 'flex',    // customizable orientation // already defined in variant `.block`/`.inline`
            // flexDirection  : 'column',  // customizable orientation // already defined in variant `.block`/`.inline`
            justifyContent: 'start',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
            // sizes:
            minInlineSize: 0,
            // borders:
            ...expandBorderStroke(),
            ...expandBorderRadius(),
            // animations:
            boxShadow: animRefs.boxShadow,
            filter: animRefs.filter,
            anim: animRefs.anim,
            // children:
            ...children([headerElm, footerElm, bodyElm], [
                imports([
                    // media:
                    usesContentMedia(),
                    // layouts:
                    usesCardItemLayout(),
                ]),
            ]),
            ...children([headerElm, footerElm], [
                imports([
                    // layouts:
                    usesCardCaptionLayout(),
                ]),
            ]),
            ...children(headerElm, [
                imports([
                    // layouts:
                    usesCardHeaderLayout(),
                ]),
            ]),
            ...children(footerElm, [
                imports([
                    // layouts:
                    usesCardFooterLayout(),
                ]),
            ]),
            ...children(bodyElm, [
                imports([
                    // layouts:
                    usesCardBodyLayout(),
                ]),
            ]),
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
        variants([
            /* the orientation variants are part of the layout, because without these variants the layout is broken */
            rule(orientationBlockSelector, [
                layout({
                    // layouts:
                    display: 'flex',
                    flexDirection: 'column',
                    // children:
                    ...children([headerElm, footerElm, bodyElm], [
                        imports([
                            // borders:
                            usesBorderAsSeparatorBlock({ swapFirstItem: true }),
                        ]),
                    ]),
                }),
            ]),
            rule(orientationInlineSelector, [
                layout({
                    // layouts:
                    display: 'inline-flex',
                    flexDirection: 'row',
                    // children:
                    ...children([headerElm, footerElm, bodyElm], [
                        imports([
                            // borders:
                            usesBorderAsSeparatorInline({ swapFirstItem: true }),
                        ]),
                    ]),
                }),
            ]),
        ]),
    ]);
};
export const usesCardVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    // borders:
    const [, , borderStrokeDecls] = usesBorderStroke();
    const [, , borderRadiusDecls] = usesBorderRadius();
    return composition([
        imports([
            // variants:
            usesIndicatorVariants(),
            usesContentVariants(),
            // layouts:
            sizes(),
        ]),
        variants([
            rule(['.flat', '.flush'], [
                layout({
                    // borders:
                    // kill borders surrounding Card:
                    [borderStrokeDecls.borderWidth]: '0px',
                    // remove rounded corners on top:
                    [borderRadiusDecls.borderStartStartRadius]: '0px',
                    [borderRadiusDecls.borderStartEndRadius]: '0px',
                    // remove rounded corners on bottom:
                    [borderRadiusDecls.borderEndStartRadius]: '0px',
                    [borderRadiusDecls.borderEndEndRadius]: '0px',
                }),
            ]),
            rule(['.flat', '.joined'], [
                layout({
                    // children:
                    ...children([headerElm, footerElm, bodyElm], [
                        layout({
                            // borders:
                            // kill separator between items:
                            [borderStrokeDecls.borderWidth]: '0px',
                        }),
                    ]),
                }),
            ]),
        ]),
    ]);
};
export const usesCardStates = () => {
    return composition([
        imports([
            // states:
            usesIndicatorStates(),
        ]),
    ]);
};
export const useCardSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesCardLayout(),
            // variants:
            usesCardVariants(),
            // states:
            usesCardStates(),
        ]),
    ]),
], /*sheetId :*/ 'wfc3nwgtcn'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        // sizes:
        boxSizing: 'border-box',
        blockSize: '100%',
        // captions:
        captionFilter: [['brightness(70%)', 'contrast(140%)']],
        // typos:
        wordWrap: 'break-word',
    };
}, { prefix: 'crd' });
export function Card(props) {
    // styles:
    const sheet = useCardSheet();
    // variants:
    const orientationVariant = useOrientationVariant(props);
    const orientationHorizontal = (orientationVariant.class === 'inline');
    const cardVariant = useCardVariant(props);
    // rest props:
    const { 
    // essentials:
    headerStyle, headerRef, bodyStyle, bodyRef, footerStyle, footerRef, 
    // semantics:
    headerTag, bodyTag, footerTag, headerRole, bodyRole, footerRole, headerSemanticTag, bodySemanticTag, footerSemanticTag, headerSemanticRole, bodySemanticRole, footerSemanticRole, 
    // classes:
    headerMainClass, headerClasses, headerVariantClasses, headerStateClasses, bodyMainClass, bodyClasses, bodyVariantClasses, bodyStateClasses, footerMainClass, footerClasses, footerVariantClasses, footerStateClasses, 
    // children:
    children, header, footer, ...restProps } = props;
    // jsx:
    if (!React.Children.count(header))
        setRef(headerRef, null);
    if (!React.Children.count(children))
        setRef(bodyRef, null);
    if (!React.Children.count(footer))
        setRef(footerRef, null);
    return (React.createElement(Indicator, { ...restProps, 
        // semantics:
        semanticTag: props.semanticTag ?? 'article', semanticRole: props.semanticRole ?? 'article', "aria-orientation": props['aria-orientation'] ?? (orientationHorizontal ? 'horizontal' : 'vertical'), 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            orientationVariant.class,
            cardVariant.class,
        ] },
        header && React.createElement(Element
        // essentials:
        , { 
            // essentials:
            elmRef: headerRef, 
            // semantics:
            tag: headerTag ?? 'header', role: headerRole, semanticTag: headerSemanticTag, semanticRole: headerSemanticRole, 
            // classes:
            mainClass: headerMainClass, classes: [...(headerClasses ?? []),
                'header',
            ], variantClasses: headerVariantClasses, stateClasses: headerStateClasses, 
            // styles:
            style: headerStyle }, header),
        children && React.createElement(Element
        // essentials:
        , { 
            // essentials:
            elmRef: bodyRef, 
            // semantics:
            tag: bodyTag, role: bodyRole, semanticTag: bodySemanticTag, semanticRole: bodySemanticRole, 
            // classes:
            mainClass: bodyMainClass, classes: [...(bodyClasses ?? []),
                'body',
            ], variantClasses: bodyVariantClasses, stateClasses: bodyStateClasses, 
            // styles:
            style: bodyStyle }, children),
        footer && React.createElement(Element
        // essentials:
        , { 
            // essentials:
            elmRef: footerRef, 
            // semantics:
            tag: footerTag ?? 'footer', role: footerRole, semanticTag: footerSemanticTag, semanticRole: footerSemanticRole, 
            // classes:
            mainClass: footerMainClass, classes: [...(footerClasses ?? []),
                'footer',
            ], variantClasses: footerVariantClasses, stateClasses: footerStateClasses, 
            // styles:
            style: footerStyle }, footer)));
}
export { Card as default };
