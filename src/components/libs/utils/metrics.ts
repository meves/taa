export const inculdeYandexMetric = () =>
{
    const headMetric =
`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(93311898, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});`

    const scriptElement = document.createElement("script")
    scriptElement.setAttribute("type", "text/javascript")
    scriptElement.innerText = headMetric
    const title = document.querySelector("title")
    title?.insertAdjacentElement("afterend", scriptElement)

    const noscriptElement = document.createElement("noscript")
    const divElement = document.createElement("div")
    const imgElement = document.createElement("img")
    imgElement.setAttribute("src", "https://mc.yandex.ru/watch/93311898")
    imgElement.setAttribute("style", "position:absolute; left:-9999px;")
    imgElement.setAttribute("alt", " ")
    divElement.append(imgElement)
    noscriptElement.append(divElement)
    document.body.prepend(noscriptElement)
}