module.exports = {
    "plugins": [
        "@stylistic/stylelint-plugin",
        "stylelint-order",
        "stylelint-scss"
    ],
    "rules": {
        "block-no-empty": true,
        "color-no-invalid-hex": true,
        "color-hex-length": "long",
        "color-named": "never",
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "length-zero-no-unit": true,
        "function-url-quotes": "always",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-disallowed-list": ["initial"],
        "font-family-no-duplicate-names": true,
        "no-duplicate-selectors": true,
        "no-duplicate-at-import-rules": true,
        "no-empty-source": true,
        "property-no-unknown": true,
        "rule-empty-line-before": [
            "always-multi-line", {
                "ignore": ["after-comment", "first-nested"]
            }
        ],
        "selector-pseudo-element-colon-notation": "double",
        "selector-attribute-quotes": "always",
        "selector-type-case": "lower",
        "unit-no-unknown": true,
        "value-keyword-case": [
            "lower",
            {
                "ignoreKeywords": [
                    "currentColor"
                ]
            }
        ],
        "@stylistic/block-closing-brace-empty-line-before": "never",
        "@stylistic/block-closing-brace-newline-after": [
            "always", {
                "ignoreAtRules": ["if", "else"]
            }
        ],
        "@stylistic/block-opening-brace-newline-after": "always",
        "@stylistic/block-opening-brace-space-before": "always",
        "@stylistic/color-hex-case": "lower",
        "@stylistic/declaration-block-semicolon-space-before": "never",
        "@stylistic/declaration-block-trailing-semicolon": "always",
        "@stylistic/declaration-bang-space-after": "never",
        "@stylistic/declaration-bang-space-before": "always",
        "@stylistic/declaration-colon-newline-after": "always-multi-line",
        "@stylistic/declaration-colon-space-after": "always-single-line",
        "@stylistic/declaration-colon-space-before": "never",
        "@stylistic/function-max-empty-lines": 1,
        "@stylistic/indentation": 4,
        "@stylistic/max-empty-lines": 2,
        "@stylistic/media-feature-colon-space-after": "always",
        "@stylistic/media-feature-colon-space-before": "never",
        "@stylistic/no-empty-first-line": true,
        "@stylistic/no-extra-semicolons": true,
        "@stylistic/number-leading-zero": "always",
        "@stylistic/number-no-trailing-zeros": true,
        "@stylistic/property-case": "lower",
        "@stylistic/string-quotes": "single",
        "@stylistic/selector-attribute-operator-space-before": "never",
        "@stylistic/selector-attribute-operator-space-after": "never",
        "@stylistic/selector-attribute-brackets-space-inside": "never",
        "@stylistic/selector-combinator-space-after": "always",
        "@stylistic/selector-list-comma-newline-after": "always",
        "@stylistic/selector-pseudo-class-case": "lower",
        "@stylistic/selector-pseudo-class-parentheses-space-inside": "never",
        "@stylistic/unit-case": "lower",
        "@stylistic/value-list-comma-space-after": "always-single-line",
        "@stylistic/value-list-comma-space-before": "never-single-line",
        "@stylistic/value-list-max-empty-lines": 1,
        "scss/block-no-redundant-nesting": true,
        "scss/at-each-key-value-single-line": true,
        "scss/at-else-empty-line-before": "never",
        "scss/at-else-if-parentheses-space-before": "always",
        "scss/at-function-parentheses-space-before": "never",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-no-null": true,
        "scss/at-mixin-argumentless-call-parentheses": "never",
        "scss/at-mixin-parentheses-space-before": "never",
        "scss/at-use-no-unnamespaced": true,
        "scss/at-use-no-redundant-alias": true,
        "scss/comment-no-empty": true,
        "scss/dollar-variable-colon-space-after": "always",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/declaration-nested-properties": "never",
        "scss/operator-no-newline-after": true,
        "scss/operator-no-unspaced": true,
        "scss/selector-no-union-class-name": true,
        "scss/no-duplicate-mixins": true,
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-order": [
            {
                "groupName": "content",
                "order": "flexible",
                "properties": [
                    "content"
                ]
            },
            {
                "groupName": "position",
                "order": "flexible",
                "properties": [
                    "clear",
                    "display",
                    "float",
                    "position"
                ]
            },
            {
                "groupName": "grid-flex",
                "order": "flexible",
                "properties": [
                    "align-content",
                    "align-items",
                    "align-self",
                    "column-gap",
                    "flex",
                    "flex-basis",
                    "flex-direction",
                    "flex-flow",
                    "flex-grow",
                    "flex-shrink",
                    "flex-wrap",
                    "gap",
                    "grid",
                    "grid-area",
                    "grid-auto-rows",
                    "grid-auto-columns",
                    "grid-auto-flow",
                    "grid-column",
                    "grid-column-end",
                    "grid-column-gap",
                    "grid-column-start",
                    "grid-gap",
                    "grid-row",
                    "grid-row-end",
                    "grid-row-gap",
                    "grid-row-start",
                    "grid-template",
                    "grid-template-areas",
                    "grid-template-rows",
                    "grid-template-columns",
                    "justify-content",
                    "justify-items",
                    "justify-self",
                    "order",
                    "place-content",
                    "place-items",
                    "place-self",
                    "row-gap"
                ]
            },
            {
                "groupName": "column",
                "order": "flexible",
                "properties": [
                    "columns",
                    "column-count",
                    "column-fill",
                    "column-gap",
                    "column-rule",
                    "column-rule-color",
                    "column-rule-style",
                    "column-rule-width",
                    "column-span",
                    "column-width"
                ]
            },
            {
                "groupName": "inset-position",
                "order": "flexible",
                "properties": [
                    "bottom",
                    "inset",
                    "inset-block",
                    "inset-block-end",
                    "inset-block-start",
                    "inset-inline",
                    "inset-inline-end",
                    "inset-inline-start",
                    "left",
                    "right",
                    "top"
                ]
            },
            {
                "groupName": "dimension",
                "order": "flexible",
                "properties": [
                    "width",
                    "min-width",
                    "max-width",
                    "height",
                    "min-height",
                    "max-height"
                ]
            },
            {
                "groupName": "margin",
                "order": "flexible",
                "properties": [
                    "margin",
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left",
                    "margin-block",
                    "margin-block-end",
                    "margin-block-start",
                    "margin-inline",
                    "margin-inline-end",
                    "margin-inline-start"
                ]
            },
            {
                "groupName": "padding",
                "order": "flexible",
                "properties": [
                    "padding",
                    "padding-top",
                    "padding-right",
                    "padding-bottom",
                    "padding-left",
                    "padding-block",
                    "padding-block-end",
                    "padding-block-start",
                    "padding-inline",
                    "padding-inline-end",
                    "padding-inline-start"
                ]
            },
            {
                "groupName": "color",
                "order": "flexible",
                "properties": [
                    "color",
                    "background",
                    "background-color",
                    "background-image",
                    "background-attachment",
                    "background-position",
                    "background-position-x",
                    "background-position-y",
                    "background-clip",
                    "background-origin",
                    "background-size",
                    "background-repeat"
                ]
            },
            {
                "groupName": "color-effect",
                "order": "flexible",
                "properties": [
                    "box-shadow",
                    "filter",
                    "mix-blend-mode",
                    "opacity"
                ]
            },
            {
                "groupName": "border",
                "order": "flexible",
                "properties": [
                    "border",
                    "border-block",
                    "border-block-color",
                    "border-block-end",
                    "border-block-end-color",
                    "border-block-end-style",
                    "border-block-end-width",
                    "border-block-start",
                    "border-block-start-color",
                    "border-block-start-style",
                    "border-block-start-width",
                    "border-block-style",
                    "border-block-width",
                    "border-bottom",
                    "border-bottom-width",
                    "border-bottom-style",
                    "border-bottom-color",
                    "border-bottom-right-radius",
                    "border-bottom-right-image",
                    "border-bottom-left-radius",
                    "border-bottom-left-image",
                    "border-bottom-image",
                    "border-collapse",
                    "border-color",
                    "border-corner-image",
                    "border-end-end-radius",
                    "border-end-start-radius",
                    "border-inline",
                    "border-inline-color",
                    "border-inline-end",
                    "border-inline-end-color",
                    "border-inline-end-style",
                    "border-inline-end-width",
                    "border-inline-start",
                    "border-inline-start-color",
                    "border-inline-start-style",
                    "border-inline-start-width",
                    "border-inline-style",
                    "border-inline-width",
                    "border-image",
                    "border-image-outset",
                    "border-image-repeat",
                    "border-image-slice",
                    "border-image-source",
                    "border-image-width",
                    "border-left",
                    "border-left-width",
                    "border-left-style",
                    "border-left-color",
                    "border-left-image",
                    "border-radius",
                    "border-right",
                    "border-right-width",
                    "border-right-style",
                    "border-right-color",
                    "border-right-image",
                    "border-spacing",
                    "border-start-end-radius",
                    "border-start-start-radius",
                    "border-style",
                    "border-top",
                    "border-top-image",
                    "border-top-color",
                    "border-top-left-radius",
                    "border-top-left-image",
                    "border-top-right-radius",
                    "border-top-right-image",
                    "border-top-style",
                    "border-top-width",
                    "border-width"
                ]
            },
            {
                "groupName": "font",
                "order": "flexible",
                "properties": [
                    "font",
                    "font-weight",
                    "font-style",
                    "font-variant",
                    "font-size-adjust",
                    "font-stretch",
                    "font-size",
                    "font-family"
                ]
            },
            {
                "groupName": "text",
                "order": "flexible",
                "properties": [
                    "line-height",
                    "letter-spacing",
                    "text-align",
                    "text-align-last",
                    "text-decoration",
                    "text-emphasis",
                    "text-emphasis-position",
                    "text-emphasis-style",
                    "text-emphasis-color",
                    "text-indent",
                    "text-justify",
                    "text-outline",
                    "text-transform",
                    "text-wrap",
                    "text-overflow",
                    "text-overflow-ellipsis",
                    "text-overflow-mode",
                    "text-shadow",
                    "white-space",
                    "word-spacing",
                    "word-wrap",
                    "word-break",
                    "overflow-wrap",
                    "vertical-align",
                    "hyphens"
                ]
            },
            {
                "groupName": "object",
                "order": "flexible",
                "properties": [
                    "object-fit",
                    "object-position"
                ]
            },
            {
                "groupName": "transform",
                "order": "flexible",
                "properties": [
                    "rotate",
                    "scale",
                    "transform",
                    "transform-origin",
                    "translate"
                ]
            },
            {
                "groupName": "perspective",
                "order": "flexible",
                "properties": [
                    "perspective",
                    "perspective-origin"
                ]
            },
            {
                "groupName": "transition",
                "order": "flexible",
                "properties": [
                    "transition",
                    "transition-delay",
                    "transition-duration",
                    "transition-property",
                    "transition-timing-function"
                ]
            },
            {
                "groupName": "animation",
                "order": "flexible",
                "properties": [
                    "animation",
                    "animation-delay",
                    "animation-direction",
                    "animation-duration",
                    "animation-fill-mode",
                    "animation-iteration-count",
                    "animation-name",
                    "animation-play-state",
                    "animation-timing-function"
                ]
            },
            {
                "groupName": "mouse",
                "order": "flexible",
                "properties": [
                    "cursor",
                    "pointer-events",
                    "touch-action",
                    "user-select"
                ]
            },
            {
                "groupName": "pagebreak",
                "order": "flexible",
                "properties": [
                    "break-inside",
                    "break-before",
                    "break-after",
                    "page-break-before",
                    "page-break-inside",
                    "page-break-after"
                ]
            },
            {
                "groupName": "zindex",
                "order": "flexible",
                "properties": [
                    "z-index"
                ]
            }
        ]
    }
};
