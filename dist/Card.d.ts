import { default as React } from 'react';
import type { Optional } from '@cssfn/types';
import { Tag, Role, SemanticTag, SemanticRole } from '@nodestrap/element';
import { OrientationName, OrientationRuleOptions, OrientationVariant } from '@nodestrap/basic';
import { IndicatorProps } from '@nodestrap/indicator';
export declare const defaultOrientationRuleOptions: OrientationRuleOptions;
export declare type CardStyle = 'flat' | 'flush' | 'joined';
export interface CardVariant {
    cardStyle?: CardStyle;
}
export declare const useCardVariant: (props: CardVariant) => {
    class: CardStyle | null;
};
export declare const usesCardItemLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesCardCaptionLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesCardHeaderLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesCardFooterLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesCardBodyLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesCardLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesCardVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesCardStates: () => import("@cssfn/cssfn").Rule;
export declare const useCardSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    boxSizing: string;
    blockSize: string;
    captionFilter: string[][];
    wordWrap: string;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    boxSizing: string;
    blockSize: string;
    captionFilter: string[][];
    wordWrap: string;
}>, cssVals: import("@cssfn/css-config").Vals<{
    boxSizing: string;
    blockSize: string;
    captionFilter: string[][];
    wordWrap: string;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface CardProps<TElement extends HTMLElement = HTMLElement> extends IndicatorProps<TElement>, OrientationVariant, CardVariant {
    headerStyle?: React.CSSProperties;
    headerRef?: React.Ref<HTMLElement>;
    bodyStyle?: React.CSSProperties;
    bodyRef?: React.Ref<HTMLElement>;
    footerStyle?: React.CSSProperties;
    footerRef?: React.Ref<HTMLElement>;
    headerTag?: Tag;
    bodyTag?: Tag;
    footerTag?: Tag;
    headerRole?: Role;
    bodyRole?: Role;
    footerRole?: Role;
    headerSemanticTag?: SemanticTag;
    bodySemanticTag?: SemanticTag;
    footerSemanticTag?: SemanticTag;
    headerSemanticRole?: SemanticRole;
    bodySemanticRole?: SemanticRole;
    footerSemanticRole?: SemanticRole;
    headerMainClass?: Optional<string>;
    headerClasses?: Optional<string>[];
    headerVariantClasses?: Optional<string>[];
    headerStateClasses?: Optional<string>[];
    bodyMainClass?: Optional<string>;
    bodyClasses?: Optional<string>[];
    bodyVariantClasses?: Optional<string>[];
    bodyStateClasses?: Optional<string>[];
    footerMainClass?: Optional<string>;
    footerClasses?: Optional<string>[];
    footerVariantClasses?: Optional<string>[];
    footerStateClasses?: Optional<string>[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare function Card<TElement extends HTMLElement = HTMLElement>(props: CardProps<TElement>): JSX.Element;
export { Card as default };
export type { OrientationName, OrientationVariant };
