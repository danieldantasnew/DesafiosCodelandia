export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (!response.ok)
            throw new Error(json);
        return json;
    }
    catch (erro) {
        if (erro instanceof Error)
            console.log(erro.message);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map