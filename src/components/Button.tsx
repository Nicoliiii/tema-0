// bg-main-700 bg-main-100 
// border-main-700 border-main-100
// text-main-700 text-main-100

type Props = {
   highlighted?: boolean
   dark?: boolean
   thick?: boolean
   children?: React.ReactNode
}

const bright = 100
const dark = 700

export default function Button(props: Props) {
    const borderColor = props.dark ? dark : bright
    const textColor = ((!props.dark && props.highlighted) || (props.dark && !props.highlighted)) ? dark : bright

    return <button className={`px-5 py-1 
    uppercase text-main-${textColor} tracking-widest font-semibold
    ${props.highlighted && 'bg-main-'+borderColor} 
    border-main-${borderColor} ${props.thick ? 'border-2' : 'border'} rounded-md`}>
        {props.children}
    </button>    
}