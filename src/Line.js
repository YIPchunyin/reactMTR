import './index.css'
function Line({shortName,staName,color, showThisLine, isActive}){
  // function inputClick(){
  //   showThisLine()
  // }
    return <>
    {
        <input onClick={showThisLine} type="button"
        value={staName} text = {shortName}
        style={{
          backgroundColor: isActive ? `${color}`:'transparent', // 背景透明
          color: isActive ? 'white' : `${color}`, // 字体颜色根据激活状态变化
          border: `2px solid ${color}`} }
        />
    }
    </>
}
export default Line