import './App.css';
import Line from './Line'
import { useState } from 'react';
function App() {
  const line = {
    KTL: {
        text: "觀塘線",
        color: "#7ed957",
        sta: [
            { code: "WHA", name: "Whampoa" },
            { code: "HOM", name: "Ho Man Tin" },
            { code: "YMT", name: "Yau Ma Tei" },
            { code: "MOK", name: "Mong Kok" },
            { code: "PRE", name: "Prince Edward" },
            { code: "SKM", name: "Shek Kip Mei" },
            { code: "KOT", name: "Kowloon Tong" },
            { code: "LOF", name: "Lok Fu" },
            { code: "WTS", name: "Wong Tai Sin" },
            { code: "DIH", name: "Diamond Hill" },
            { code: "CHH", name: "Choi Hung" },
            { code: "KOB", name: "Kowloon Bay" },
            { code: "NTK", name: "Ngau Tau Kok" },
            { code: "KWT", name: "Kwun Tong" },
            { code: "LAT", name: "Lam Tin" },
            { code: "YAT", name: "Yau Tong" },
            { code: "TIK", name: "Tiu Keng Leng" },
        ],
    },
    ISL: {
        text: "港島線",
        color: "#004aad",
        sta: [
            { code: "KET", name: "Kennedy Town" },
            { code: "HKU", name: "HKU" },
            { code: "SYP", name: "Sai Ying Pun" },
            { code: "SHW", name: "Sheung Wan" },
            { code: "CEN", name: "Central" },
            { code: "ADM", name: "Admiralty" },
            { code: "WAC", name: "Wan Chai" },
            { code: "CAB", name: "Causeway Bay" },
            { code: "TIH", name: "Tin Hau" },
            { code: "FOH", name: "Fortress Hill" },
            { code: "NOP", name: "North Point" },
            { code: "QUB", name: "Quarry Bay" },
            { code: "TAK", name: "Tai Koo" },
            { code: "SWH", name: "Sai Wan Ho" },
            { code: "SKW", name: "Shau Kei Wan" },
            { code: "HFC", name: "Heng Fa Chuen" },
            { code: "CHW", name: "Chai Wan" },
        ],
    },
    TWL: {
        text: "荃灣線",
        color: "#ff3131",
        sta: [
            { code: "CEN", name: "Central" },
            { code: "ADM", name: "Admiralty" },
            { code: "TST", name: "Tsim Sha Tsui" },
            { code: "JOR", name: "Jordan" },
            { code: "YMT", name: "Yau Ma Tei" },
            { code: "MOK", name: "Mong Kok" },
            { code: "PRE", name: "Price Edward" },
            { code: "SSP", name: "Sham Shui Po" },
            { code: "CSW", name: "Cheung Sha Wan" },
            { code: "LCK", name: "Lai Chi Kok" },
            { code: "MEF", name: "Mei Foo" },
            { code: "LAK", name: "Lai King" },
            { code: "KWF", name: "Kwai Fong" },
            { code: "KWH", name: "Kwai Hing" },
            { code: "TWH", name: "Tai Wo Hau" },
            { code: "TSW", name: "Tsuen Wan" },
        ],
    },
    SIL: {
        text: "南港島線",
        color: "#cbcd09",
        sta: [
            { code: "ADM", name: "Admiralty" },
            { code: "OCP", name: "Ocean Park" },
            { code: "WCH", name: "Wong Chuk Hang" },
            { code: "LET", name: "Lei Tung" },
            { code: "SOH", name: "South Horizons" },
        ],
    },
    TCL: {
        text: "東涌線",
        color: "#f6943d",
        sta: [
            { code: "HOK", name: "Hong Kong" },
            { code: "KOW", name: "Kowloon" },
            { code: "OLY", name: "Olympic" },
            { code: "NAC", name: "Nam Cheong" },
            { code: "LAK", name: "Lai King" },
            { code: "TSY", name: "Tsing Yi" },
            { code: "SUN", name: "Sunny Bay" },
            { code: "TUC", name: "Tung Chung" },
        ],
    },
    EAL: {
        text: "東鐵線",
        color: "#5ce1e6",
        sta: [
            { code: "ADM", name: "Admiralty" },
            { code: "EXC", name: "Exhibition Centre" },
            { code: "HUH", name: "Hung Hom" },
            { code: "MKK", name: "Mong Kok East" },
            { code: "KOT", name: "Kowloon Tong" },
            { code: "TAW", name: "Tai Wai" },
            { code: "SHT", name: "Sha Tin" },
            { code: "FOT", name: "Fo Tan" },
            { code: "RAC", name: "Racecourse" },
            { code: "UNI", name: "University" },
            { code: "TAP", name: "Tai Po Market" },
            { code: "TWO", name: "Tai Wo" },
            { code: "FAN", name: "Fanling" },
            { code: "SHS", name: "Sheung Shui" },
            { code: "LOW", name: "Lo Wu" },
            { code: "LMC", name: "Lok Ma Chau" },
        ],
    },
    TML: {
        text: "屯馬線",
        color: "#8d6019",
        sta: [
            { code: "WKS", name: "Wu Kai Sha" },
            { code: "MOS", name: "Ma On Shan" },
            { code: "HEO", name: "Heng On" },
            { code: "TSH", name: "Tai Shui Hang" },
            { code: "SHM", name: "Shek Mun" },
            { code: "CIO", name: "City One" },
            { code: "STW", name: "Sha Tin Wai" },
            { code: "CKT", name: "Che Kung Temple" },
            { code: "TAW", name: "Tai Wai" },
            { code: "HIK", name: "Hin Keng" },
            { code: "DIH", name: "Diamond Hill" },
            { code: "KAT", name: "Kai Tak" },
            { code: "SUW", name: "Sung Wong Toi" },
            { code: "TKW", name: "To Kwa Wan" },
            { code: "HOM", name: "Ho Man Tin" },
            { code: "HUH", name: "Hung Hom" },
            { code: "ETS", name: "East Tsim Sha Tsui" },
            { code: "AUS", name: "Austin" },
            { code: "NAC", name: "Nam Cheong" },
            { code: "MEF", name: "Mei Foo" },
            { code: "TWW", name: "Tsuen Wan West" },
            { code: "KSR", name: "Kam Sheung Road" },
            { code: "YUL", name: "Yuen Long" },
            { code: "LOP", name: "Long Ping" },
            { code: "TIS", name: "Tin Shui Wai" },
            { code: "SIH", name: "Siu Hong" },
            { code: "TUM", name: "Tuen Mun" },
        ],
    },
    AEL: {
        text: "機場快線",
        color: "#3d9ea0",
        sta: [
            { code: "HOK", name: "Hong Kong" },
            { code: "KOW", name: "Kowloon" },
            { code: "TSY", name: "Tsing Yi" },
            { code: "AIR", name: "Airport" },
            { code: "AWE", name: "AsiaWorld Expo" },
        ],
    },
    TKL: {
        text: "將軍澳線",
        color: "#8d45ab",
        sta: [
            { code: "NOP", name: "North Point" },
            { code: "QUB", name: "Quarry Bay" },
            { code: "YAT", name: "Yau Tong" },
            { code: "TIK", name: "Tiu Keng Leng" },
            { code: "TKO", name: "Tseung Kwan O" },
            { code: "LHP", name: "LOHAS Park" },
            { code: "HAH", name: "Hang Hau" },
            { code: "POA", name: "Po Lam" },
        ],
    },
};
const staToTC = {
    "WHA": "黃埔",
    "HOM": "何文田",
    "YMT": "油麻地",
    "MOK": "旺角",
    "PRE": "太子",
    "SKM": "石碣尾",
    "KOT": "九龍塘",
    "LOF": "樂富",
    "WTS": "黃大仙",
    "DIH": "鑽石山",
    "CHH": "彩虹",
    "KOB": "九龍灣",
    "NTK": "牛頭角",
    "KWT": "觀塘",
    "LAT": "藍田",
    "YAT": "游塘",
    "TIK": "調景嶺",
    "KET": "堅尼地城",
    "HKU": "香港大學",
    "SYP": "西營盤",
    "SHW": "上環",
    "CEN": "中環",
    "ADM": "金鐘",
    "WAC": "灣仔",
    "CAB": "銅鑼灣",
    "TIH": "天后",
    "FOH": "炮台山",
    "NOP": "北角",
    "QUB": "鰂魚涌",
    "TAK": "太古",
    "SWH": "西灣河",
    "SKW": "筲箕灣",
    "HFC": "橫頭磡",
    "CHW": "柴灣",
    "TST": "尖沙咀",
    "JOR": "佐敦",
    "SSP": "深水埗",
    "CSW": "長沙灣",
    "LCK": "荔枝角",
    "MEF": "美孚",
    "LAK": "荔景",
    "KWF": "葵芳",
    "KWH": "葵興",
    "TWH": "大窩口",
    "TSW": "荃灣",
    "OCP": "海洋公園",
    "WCH": "黃竹坑",
    "LET": "利東",
    "SOH": "海怡半島",
    "HOK": "香港",
    "KOW": "九龍",
    "OLY": "奧運",
    "NAC": "南昌",
    "TSY": "青衣",
    "SUN": "欣澳",
    "TUC": "東涌",
    "EXC": "會展中心",
    "HUH": "紅磡",
    "MKK": "旺角東",
    "TAW": "大圍",
    "SHT": "沙田",
    "FOT": "火炭",
    "RAC": "賽馬場",
    "UNI": "大學",
    "TAP": "大埔墟",
    "TWO": "大窩",
    "FAN": "粉嶺",
    "SHS": "上水",
    "LOW": "羅湖",
    "LMC": "落馬洲",
    "WKS": "烏溪沙",
    "MOS": "馬鞍山",
    "HEO": "恆安",
    "TSH": "太水坑",
    "SHM": "石門",
    "CIO": "第一城",
    "STW": "沙田圍",
    "CKT": "車公廟",
    "HIK": "顯徑",
    "KAT": "啟德",
    "SUW": "宋皇台",
    "TKW": "土瓜灣",
    "ETS": "尖東",
    "AUS": "柯士甸",
    "TWW": "荃灣西",
    "KSR": "錦上路",
    "YUL": "元朗",
    "LOP": "朗屏",
    "TIS": "天水圍",
    "SIH": "勺景",
    "TUM": "屯門",
    "AIR": "機場",
    "AWE": "亞洲博覽館",
    "TKO": "將軍澳",
    "LHP": "康城",
    "HAH": "坑口",
    "POA": "寶琳"
  };

  let numList = {
    "1":"①",
    "2":"②",
    "3":"③",
    "4":"④",
    "5":"⑤",
    "6":"⑥",
    "7":"⑦",
    "8":"⑧",
    "9":"⑨",
    "10":"⑩",
}
    let clickColor = ''
    let shortName
    let TargetLine
    const dArry = ['UP', 'DOWN'];
    const [activeIndex, setActiveIndex] = useState(null); 
    const [mtrColor, setMtrColor] = useState('black'); 
    const [stationInfoList, setStationInfoList] = useState({});
    //   const [clickLine,changeClickLine] = useState(Array(9).fill(''))
    const [newTime, setnewTime] = useState('點擊查看近兩班車駛出時間及月臺'); // 当前时间状态

  function getMins(time){
    let currentTime = new Date();
    let targetTime = new Date(time.replace(' ', 'T'));
    let timeDiff = targetTime.getTime() - currentTime.getTime();
    return Math.floor(timeDiff / (1000 * 60));
    }

    function dealAllData(allData){
        let stationInfoList = {'UP':{},'DOWN': {}}
        const dArry = ['UP', 'DOWN'];
        for (let index in allData) {
            let sta = Object.keys(allData[index].data)[0].split('-')[1]
            let direction = Object.keys(allData[index].data)[0];
            for (let d in dArry) {
                if (allData[index].data[direction].hasOwnProperty(`${dArry[d]}`)) {
                    if (allData[index].data[direction][`${dArry[d]}`].length !== 0) {
                        let oneData = allData[index].data[direction][dArry[d]];
                        for (let seq in oneData){
                            let dest = oneData[seq].dest
                            let destTc = staToTC[dest]
                            let theStaTc = staToTC[sta]
                            if(!stationInfoList[dArry[d]][destTc]){
                                stationInfoList[dArry[d]][destTc] = {}
                            }
                            if(!stationInfoList[dArry[d]][destTc][theStaTc]){
                                stationInfoList[dArry[d]][destTc][theStaTc] = []
                            }
                            let stationInfo = [`${staToTC[sta]}`];
                            stationInfo = [];
                            let time = oneData[seq].time;
                            let plat = numList[oneData[seq].plat];
                            let minutesDiff = getMins(time);
                            if (minutesDiff < 1) {
                                stationInfo.push(`進站中 ${plat}`);
                            } else if (minutesDiff > 60) {
                                stationInfo.push(time.split(' ')[1].substring(0, 5)+` ${plat}`);
                            } else {
                                stationInfo.push(`${minutesDiff}Mins  ${plat}`);
                            }
                            stationInfoList[dArry[d]][destTc][theStaTc].push(stationInfo) 
                        }
                    } 
                }
            }
        }
        return stationInfoList
    }


  const ShowLines = Object.keys(line).map((item, index) => {
    // console.log(index)
    return (
        <Line key = {index} 
        shortName = {item}   
        staName = {line[item].text} 
        showThisLine={() => showThisLine(index,item,line[item].text )}
        color = {line[item].color}
        isActive={activeIndex === index}
        />
    )
  })
  const showThisLine = async (index,shortName,staName) => {
    setActiveIndex(index);
    shortName = shortName
    TargetLine = shortName
    setMtrColor(line[shortName].color)
    clickColor = line[shortName].color
    setnewTime('最後更新時間為：'+ new Date().toLocaleTimeString() ); 
    let apiUrl = []
    for (let i in line[shortName]["sta"]) apiUrl.push(`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${shortName}&sta=${line[shortName]['sta'][i].code}`)
    let allData = await fetchAllData(apiUrl)
    const newStationInfoList = dealAllData(allData);
    setStationInfoList(newStationInfoList);
  }
async function fetchAllData(apiList){
    const asyncTasks = apiList.map(async (url) => {
        try{
            const response = await fetch(url);
            return await response.json();
        }
        catch{
        }
    });
    return await Promise.all(asyncTasks);
}
const renderStationInfo = () => {
    let num = Object.keys(stationInfoList["UP"] || {}).length + Object.keys(stationInfoList["DOWN"] || {}).length;
    try{
        return dArry.map((direction) => (
            Object.keys(stationInfoList[direction] || {}).map((destName, index) => {
                const oneDest = stationInfoList[direction][destName];
                return (
                    <div className="Sta_Box" key={index} style={{ width: `${100 / num}%`, flexDirection: direction === "DOWN" ? "column-reverse" : "column"}}>
                        {direction == 'UP'? <div className="direction">通往 {destName} 方向</div>:''}
                        {Object.keys(oneDest).map((staTCname) => {
                            const oneSta = oneDest[staTCname];
                            if (staTCname in oneDest) {
                                return (
                                    <div className="sta_box" key={staTCname} style={{ background: mtrColor }}>
                                        <p>{staTCname}</p>
                                        {oneSta.slice(0, 2).map((info, seq) => (
                                            <p key={seq}>{info}</p>
                                        ))}
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="sta_box" key={staTCname} style={{ background: mtrColor }}>
                                        <p>{staTCname}</p>
                                        <p>暫無資訊</p>
                                    </div>
                                );
                            }
                        })}
                        {direction == 'DOWN'? <div className="direction">通往 {destName} 方向</div>:''}
    
                    </div>
                );
            })
        ));
    }
    catch{

    }
   
};


  return (
    <div className="App">
      <p className="MTR" style={{color:`${mtrColor}`}}>MTR</p>
    <p className="NewTime">{newTime}</p>
    <div className="max_box">
        <div className="line_box">
          {ShowLines}
        </div>
        <div className="sta_max_box">
            {renderStationInfo()}
        </div>
    </div>
    </div>
  );
}

export default App;
