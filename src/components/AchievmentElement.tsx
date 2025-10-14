export function AchievementElement(props:any){
    return (
        <>
        <div className="flex flex-col py-5 h-30 w-30 bg-neutral-900">
            <img src={props.image} className="h-15"/>
            <p className="text-center">{props.title}</p>
        </div>
        </>
    )
}