webpackJsonp([16],{"4R1M":function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=o("d6ZO"),t=o.n(a),s=o("W/Cr"),l=o("tmfO"),c=o("IaRT"),n=o.n(c),m=o("suNN"),d=o("gEaE");function i(e){var r=e.scope,o=e.typo,t=o.corrected,c=o.correction,n=o.original,i=t?"/search/".concat(r,"/?q=").concat(encodeURIComponent(n),"&rs=typo_auto_original&auto_correction_disabled=true"):"/search/".concat(r,"/?q=").concat(encodeURIComponent(c),"&rs=typo_suggestion&auto_correction_disabled=true");return a.createElement(d.K,{smSize:"xs",mdSize:"sm",lgSize:"md"},t?Object(m.b)(s.a._("Here's what we found for {{ correctionLink }}. Search {{ originalLink }} instead?","Misspelled search query has been auto-corrected. Offer to search for the original query."),{correctionLink:a.createElement(d.K,{inline:!0,smSize:"xs",mdSize:"sm",lgSize:"md",key:"correctionLink"},c),originalLink:a.createElement(l.b,{className:"searchAutocorrectLink",key:"originalLink",to:i},a.createElement(d.K,{bold:!0,inline:!0,smSize:"xs",mdSize:"sm",lgSize:"md"},n))}):Object(m.b)(s.a._("Did you mean {{ correctionLink }}?","Search term seems to be misspelled. Offer to search for the correct spelling."),{correctionLink:a.createElement(l.b,{className:"searchAutocorrectLink",key:"correctionLink",to:i},c)}))}r.default=i}});