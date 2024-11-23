
type typeProp = {
    title?: string,
    id: string,
    buttons: boolean,
    children?:React.ReactNode,
}

function showButtons(buttons: boolean) {
    if (buttons) {
        return (
            <div className="buttons">
                <div className="topBarBtns" id="green"></div>
                <div className="topBarBtns" id="yellow"></div>
                <div className="topBarBtns" id="red"></div>
            </div>
        )
    }
}

export default function Displays(props: typeProp) {


    return (
        <div id={props.id} >
            <div className="topbar">
                <div className="title">
                    {props.title}
                </div>
                {showButtons(props.buttons)}
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
