// const robotList=bots.map((bot)=>(
    //     <li key={bot.id}>{
    //         < img src={bot.avatar_url} alt={bot.bot_class}/>}<br/>
    //         {bot.name}<br/>
    //         {bot.health}<br/>
    //         {bot.damage}<br/>
    //         {bot.catchphrase}</li>
    // ))
function BotCollection({bots,onEnlist}){
  
    
    const robotList=bots.map((bot)=> (
        <div className="row">
        <div className="col-md-4 mb-4">
    <div className="card "   style={{width: "18rem"}} onClick={()=>onEnlist(bot)} >
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

    
    return (
        <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}} >
        {robotList }
        </div>
    )

}

export default BotCollection;