module.exports = {
    "plugins": [
        "stylelint-order"
    ],
    "rules": {
        "indentation": 4,
        "max-empty-lines": 2,
        "length-zero-no-unit": true,
        "string-quotes": "single",
        "font-family-no-duplicate-names": true,
        "rule-empty-line-before": [
            "always-multi-line",{
                "ignore": ["after-comment", "first-nested"]
            }
        ],
        "property-case": "lower",
        "property-no-unknown": true,
        "function-max-empty-lines": 1,
        "function-url-quotes": "always",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-disallowed-list": ["initial"],
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-space-before": "always",
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": [
            "always",{
                "ignoreAtRules": ["if", "else"]
            }
        ],
        "no-duplicate-selectors": true,
        "no-duplicate-at-import-rules": true,
        "no-empty-source": true,
        "no-extra-semicolons": true,
        "no-empty-first-line": true,
        "color-no-invalid-hex": true,
        "color-hex-case": "lower",
        "color-hex-length": "long",
        "color-named": "never",
        "number-no-trailing-zeros": true,
        "number-leading-zero": "always",
        "declaration-block-trailing-semicolon": "always",
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-semicolon-space-before": "never",
        "declaration-bang-space-before": "always",
        "declaration-bang-space-after": "never",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-before": "never",
        "declaration-colon-space-after": "always-single-line",
        "selector-combinator-space-after": "always",
        "selector-list-comma-newline-after": "always",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-attribute-quotes": "always",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-brackets-space-inside": "never",
        "selector-pseudo-class-case": "lower",
        "selector-type-case": "lower",
        "media-feature-colon-space-before": "never",
        "media-feature-colon-space-after": "always",
        "value-keyword-case": [
            "lower",
            {
                "ignoreKeywords": [
                    "currentColor"
                ]
            }
        ],
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never-single-line",
        "value-list-max-empty-lines":  1,
        "unit-case": "lower",
        "unit-no-unknown": true,
        "order/properties-order": [
            {
                "groupName": "position",
                "order": "flexible",
                "properties": [
                    "content",
                    "position",
                    "display",
                    "float",
                    "clear"
                ]
            },
            {
                "groupName": "grid-flex",
                "order": "flexible",
                "properties": [
                    "grid",
                    "grid-area",
                    "grid-template",
                    "grid-template-areas",
                    "grid-template-rows",
                    "grid-template-columns",
                    "grid-row",
                    "grid-row-start",
                    "grid-row-end",
                    "grid-column",
                    "grid-column-start",
                    "grid-column-end",
                    "grid-auto-rows",
                    "grid-auto-columns",
                    "grid-auto-flow",
                    "grid-gap",
                    "grid-row-gap",
                    "grid-column-gap",
                    "flex",
                    "flex-grow",
                    "flex-shrink",
                    "flex-basis",
                    "flex-direction",
                    "flex-flow",
                    "flex-wrap",
                    "align-content",
                    "align-items",
                    "align-self",
                    "justify-content",
                    "justify-items",
                    "justify-self",
                    "gap",
                    "row-gap",
                    "column-gap",
                    "order"
                ]
            },
            {
                "groupName": "column",
                "order": "flexible",
                "properties": [
                    "columns",
                    "column-span",
                    "column-width",
                    "column-count",
                    "column-fill",
                    "column-gap",
                    "column-rule",
                    "column-rule-width",
                    "column-rule-style",
                    "column-rule-color"
                ]
            },
            {
                "groupName": "inset-position",
                "order": "flexible",
                "properties": [
                    "top",
                    "right",
                    "bottom",
                    "left",
                    "inset"
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
                "groupName": "margin-padding",
                "order": "flexible",
                "properties": [
                    "margin",
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left",
                    "padding",
                    "padding-top",
                    "padding-right",
                    "padding-bottom",
                    "padding-left"
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
                "groupName": "border",
                "order": "flexible",
                "properties": [
                    "border",
                    "border-spacing",
                    "border-collapse",
                    "border-width",
                    "border-style",
                    "border-color",
                    "border-top",
                    "border-top-width",
                    "border-top-style",
                    "border-top-color",
                    "border-right",
                    "border-right-width",
                    "border-right-style",
                    "border-right-color",
                    "border-bottom",
                    "border-bottom-width",
                    "border-bottom-style",
                    "border-bottom-color",
                    "border-left",
                    "border-left-width",
                    "border-left-style",
                    "border-left-color",
                    "border-radius",
                    "border-top-left-radius",
                    "border-top-right-radius",
                    "border-bottom-right-radius",
                    "border-bottom-left-radius",
                    "border-image",
                    "border-image-source",
                    "border-image-slice",
                    "border-image-width",
                    "border-image-outset",
                    "border-image-repeat",
                    "border-top-image",
                    "border-right-image",
                    "border-bottom-image",
                    "border-left-image",
                    "border-corner-image",
                    "border-top-left-image",
                    "border-top-right-image",
                    "border-bottom-right-image",
                    "border-bottom-left-image"
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
                    "font-family",
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
                "groupName": "animation",
                "order": "flexible",
                "properties": [
                    "transition",
                    "transition-delay",
                    "transition-timing-function",
                    "transition-duration",
                    "transition-property",
                    "transform",
                    "transform-origin",
                    "animation",
                    "animation-name",
                    "animation-duration",
                    "animation-play-state",
                    "animation-timing-function",
                    "animation-delay",
                    "animation-iteration-count",
                    "animation-direction",
                    "animation-fill-mode"
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
            }
        ]
    }
};
