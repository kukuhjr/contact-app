import{r as n,G as m,F as r}from"./index-f06a1b16.js";import{b as j,a as F}from"./useQuery-cc2bd7c9.js";var O=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function S(P,s){var i,e=n.useRef(),v=n.useRef(),h=n.useRef(),u=m(s,e.current||{}),y=(i=u==null?void 0:u.query)!==null&&i!==void 0?i:P;v.current=u,h.current=y;var c=j(F(s&&s.client),y),p=c.useQuery(r(r({},u),{skip:!e.current})),g=p.observable.options.initialFetchPolicy||c.getDefaultFetchPolicy(),l=Object.assign(p,{called:!!e.current}),b=n.useMemo(function(){for(var t={},f=function(d){var Q=l[d];t[d]=function(){return e.current||(e.current=Object.create(null),c.forceUpdateState()),Q.apply(this,arguments)}},a=0,o=O;a<o.length;a++){var M=o[a];f(M)}return t},[]);Object.assign(l,b);var R=n.useCallback(function(t){e.current=t?r(r({},t),{fetchPolicy:t.fetchPolicy||g}):{fetchPolicy:g};var f=m(v.current,r({query:h.current},e.current)),a=c.executeQuery(r(r({},f),{skip:!1})).then(function(o){return Object.assign(o,b)});return a.catch(function(){}),a},[]);return[R,l]}export{S as u};