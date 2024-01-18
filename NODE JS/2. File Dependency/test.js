function getPayload(dtcCode, nextToken){
    return {
        "appName": "",
        "searchType": "library",
        "documentLanguage": "en",
        "documentType": "mil-i",
        "keyword": [
            {
                "key": "dtcCode",
                "value": dtcCode
            }
        ],
        "pageSize": 5,
        "nextToken": nextToken
    }
}


async function getDtcDetails(event){
    if(event?.params?.dtcCode && event?.params?.path != '' && null){
        let nextToken = "";
        do{
            let resp = await this.getPayload("ABC", nextToken);
            nextToken = resp.nextToken;
            let respFromDtc = await this fetchinfoByDtcCode();
            messageIds.push(respFromDtc);
        } while(nextToken!=null)
    }
}