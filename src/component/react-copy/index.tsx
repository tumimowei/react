import React,{useState} from 'react';
import { Button,message } from 'udesk-ui';
import style from './index.module.scss';
import CopyToClipboard from 'react-copy-to-clipboard';
interface CopyProps{
    text: string;
    left?: string;//可选,用于调整位置
    top?: string;
    
}
const CopyComponent: React.FC<CopyProps> = (props) => { 
    const { text,left='0px',top='-40px' } = props;
    const buttonStyle:React.CSSProperties = {
        position: 'absolute',
        top: top,
        left: left,
        zIndex: 999,
        visibility: 'hidden'
    }
    const [copyStyle, setCopyStyle] = useState(buttonStyle);
    const showButton = (e:any) => { 
        setCopyStyle({...copyStyle,visibility: text === '' ? 'hidden':'visible'})
    }
    const hideButton = (e:any) => { 
        setCopyStyle({...copyStyle,visibility:"hidden"})
    }
    const copyText = (text:string ,result:boolean) => {
        //result (bool): Returns true if copied successfully, else false.
        if (result) {
            message.info('复制成功');
        } else { 
            message.error('复制失败');
        }
    }
    return (
        <div onMouseEnter={showButton} onMouseLeave={hideButton} className={style['copy-container']}>
            <CopyToClipboard text={text}
                onCopy={copyText}
            >
                <Button style={copyStyle}>复制</Button>
            </CopyToClipboard>
            <div >
                {props.children}
            </div>
        </div>
    );
}
export default CopyComponent;