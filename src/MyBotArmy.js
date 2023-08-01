

function MyBotArmy({army,onRetire}){
 const ArmyList=army.map((bot)=> (
        <div className="row">
        <div className="col-md-4 mb-4">
    <div className="card "   style={{width: "18rem"}}  onClick={()=>onRetire(bot)}>
  <img src={bot.avatar_url} class="card-img-top" alt={bot.bot_class}/>
  <div className="card-body">
    <h5 className="card-title">{bot.name}</h5>
    <h5 className="card-text">{bot.health}</h5>
    <h5 className="card-text">{bot.damage}</h5>
    <p className="card-text">{bot.catchphrase}</p>
    
    
  </div>
</div>
</div>
</div>

 ))
    return(
        <div style={{width:"100%" ,display:"flex",height:"500px",gap:"20px",backgroundColor:"green"}}>
      {ArmyList}
        </div>

    )

}

export default MyBotArmy;