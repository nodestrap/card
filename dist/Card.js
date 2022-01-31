// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
mainComposition, 
// styles:
style, imports, 
// rules:
rule, variants, 
//combinators:
children, } from '@cssfn/cssfn'; // cssfn core
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
usesContentLayout, usesContentVariants, usesContentChildren, } from '@nodestrap/content';
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
    return style({
        ...imports([
            // layouts:
            usesIndicatorLayout(),
            usesContentLayout(),
            // children:
            usesContentChildren(),
        ]),
        ...style({
            // layouts:
            display: 'block',
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'item')), // apply general cssProps starting with item***
        }),
    });
};
export const usesCardCaptionLayout = () => {
    return style({
        // sizes:
        // default card's items height are unresizeable (excepts for the card's body):
        flex: [[0, 1, 'auto']],
        // customize:
        ...usesGeneralProps(usesPrefixedProps(cssProps, 'caption')), // apply general cssProps starting with caption***
    });
};
export const usesCardHeaderLayout = () => {
    return style({
        // customize:
        ...usesGeneralProps(usesPrefixedProps(cssProps, 'header')), // apply general cssProps starting with header***
    });
};
export const usesCardFooterLayout = () => {
    return style({
        // customize:
        ...usesGeneralProps(usesPrefixedProps(cssProps, 'footer')), // apply general cssProps starting with footer***
    });
};
export const usesCardBodyLayout = () => {
    return style({
        // sizes:
        // default card's body height is resizeable, ensuring footers are aligned to the bottom:
        flex: [[1, 1, 'auto']],
        // scrolls:
        overflow: 'auto',
        // customize:
        ...usesGeneralProps(usesPrefixedProps(cssProps, 'body')), // apply general cssProps starting with body***
    });
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
    return style({
        ...imports([
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
        ...style({
            // layouts:
            ...rule(orientationBlockSelector, {
                // layouts:
                display: 'flex',
                flexDirection: 'column', // items are stacked vertically
            }),
            ...rule(orientationInlineSelector, {
                // layouts:
                display: 'inline-flex',
                flexDirection: 'row', // items are stacked horizontally
            }),
            justifyContent: 'start',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
            // sizes:
            minInlineSize: 0,
            // borders:
            /*
                A separator between CardItems.
                Exploits the borders as a horizontal/vertical separator depending on the Card's orientation.
            */
            ...rule(orientationBlockSelector, {
                // children:
                ...children([headerElm, footerElm, bodyElm], {
                    ...imports([
                        // borders:
                        usesBorderAsSeparatorBlock({ swapFirstItem: true }), // must be placed at the last
                    ]),
                }),
            }),
            ...rule(orientationInlineSelector, {
                // children:
                ...children([headerElm, footerElm, bodyElm], {
                    ...imports([
                        // borders:
                        usesBorderAsSeparatorInline({ swapFirstItem: true }), // must be placed at the last
                    ]),
                }),
            }),
            // animations:
            boxShadow: animRefs.boxShadow,
            filter: animRefs.filter,
            anim: animRefs.anim,
            // children:
            ...children([headerElm, footerElm, bodyElm], {
                ...imports([
                    // layouts:
                    usesCardItemLayout(),
                ]),
            }),
            ...children([headerElm, footerElm], {
                ...imports([
                    // layouts:
                    usesCardCaptionLayout(),
                ]),
            }),
            ...children(headerElm, {
                ...imports([
                    // layouts:
                    usesCardHeaderLayout(),
                ]),
            }),
            ...children(footerElm, {
                ...imports([
                    // layouts:
                    usesCardFooterLayout(),
                ]),
            }),
            ...children(bodyElm, {
                ...imports([
                    // layouts:
                    usesCardBodyLayout(),
                ]),
            }),
            // customize:
            ...usesGeneralProps(cssProps),
            // borders:
            ...expandBorderStroke(),
            ...expandBorderRadius(), // expand borderRadius css vars
        }),
    });
};
export const usesCardVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    // borders:
    const [, , borderStrokeDecls] = usesBorderStroke();
    const [, , borderRadiusDecls] = usesBorderRadius();
    return style({
        ...imports([
            // variants:
            usesIndicatorVariants(),
            usesContentVariants(),
            // layouts:
            sizes(),
        ]),
        ...variants([
            rule(['.flat', '.flush'], {
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
            rule(['.flat', '.joined'], {
                // children:
                ...children([headerElm, footerElm, bodyElm], {
                    // borders:
                    // kill separator between items:
                    [borderStrokeDecls.borderWidth]: '0px',
                }),
            }),
        ]),
    });
};
export const usesCardStates = () => {
    return style({
        ...imports([
            // states:
            usesIndicatorStates(),
        ]),
    });
};
export const useCardSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesCardLayout(),
        // variants:
        usesCardVariants(),
        // states:
        usesCardStates(),
    ])),
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
