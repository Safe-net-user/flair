"use strict";(()=>{var e={};e.id=785,e.ids=[785],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},72681:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>l,patchFetch:()=>v,requestAsyncStorage:()=>u,routeModule:()=>c,serverHooks:()=>d,staticGenerationAsyncStorage:()=>p});var o={};t.r(o),t.d(o,{GET:()=>n});var i=t(49303),s=t(88716),a=t(60670);async function n(e,r){try{let e=await Object(function(){var e=Error("Cannot find module '@/lib/prisma'");throw e.code="MODULE_NOT_FOUND",e}()).service.findMany();return console.log("Services from database:",e),new Response(JSON.stringify(e),{status:200})}catch(e){return console.error("Error fetching services:",e),new Response(JSON.stringify({error:"Failed to fetch services"}),{status:500})}}!function(){var e=Error("Cannot find module '@/lib/prisma'");throw e.code="MODULE_NOT_FOUND",e}();let c=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/service/route",pathname:"/api/service",filename:"route",bundlePath:"app/api/service/route"},resolvedPagePath:"/workspaces/flair/src/app/api/service/route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:u,staticGenerationAsyncStorage:p,serverHooks:d}=c,l="/api/service/route";function v(){return(0,a.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:p})}},49303:(e,r,t)=>{e.exports=t(30517)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948],()=>t(72681));module.exports=o})();