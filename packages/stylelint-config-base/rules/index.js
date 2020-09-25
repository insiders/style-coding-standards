module.exports = {
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
        "value-keyword-case": "lower",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never-single-line",
        "value-list-max-empty-lines":  1,
        "unit-case": "lower",
        "unit-no-unknown": true
    }
};
