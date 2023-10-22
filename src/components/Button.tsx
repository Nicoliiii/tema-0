// bg-slate-800 bg-slate-100 
// border-slate-800 border-slate-100
// text-slate-800 text-slate-100

type Props = {
   highlighted?: boolean
   dark?: boolean
   children?: React.ReactNode
}

const bright = 100
const dark = 800

export default function Button(props: Props) {
    const borderColor = props.dark ? dark : bright
    const textColor = ((!props.dark && props.highlighted) || (props.dark && !props.highlighted)) ? dark : bright

    return <button className={`px-5 py-1 
    uppercase text-slate-${textColor}
    ${props.highlighted && 'bg-slate-'+borderColor} 
    border-slate-${borderColor} border-2 rounded-md`}>
        {props.children}
    </button>    
}