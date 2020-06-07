import React, { useState, useEffect}from 'react';
import { Select } from 'udesk-ui';
import { postJSON } from '../../../../../utils/ajax';
const { Option } = Select;
interface IOptions { 
    id: number;
    nick_name: string;
    [propName: string]: any;
}
interface ISearchParams { 
    prefix: string;
    page_size: number
    page: number
    includes: string
}
interface IProps {
    selectOnChange:(value?:number)=>void
}
const TargetCustomerSelect: React.FC<IProps> = (props) => { 
    const { selectOnChange } = props;
    const [optionsArr, setOptionsArr] = useState<IOptions[]>([]);
    const [value, setValue] = useState<number>();
    // const [searchValue, setSearchValue] = useState<string>('');
    const [searchParams, setSearchParams] = useState<ISearchParams>({
        prefix: '',
        page_size: 20,
        page: 1,
        includes: 'can_merge'
    })
    useEffect(() => {
        //请求数据
        if (searchParams.prefix) {
            let params = { ...searchParams };
            postJSON('/customers/contain_search', params).then(res => {
                console.log('search', res);
                setOptionsArr((prev) => { 
                    return prev.concat([...res.customers])
                })
            })
        } else {
            setOptionsArr([]);
            setSearchParams({ ...searchParams, page: 1})
        }
    }, [searchParams.prefix, searchParams.page]);
    const handleSearch = (value:string) => { 
        // setSearchValue(value);
        setSearchParams({ ...searchParams, prefix: value})
    }
    const handleChange = (value:any) => { 
        setValue(value);
        console.log('zujian changeg', value);
        selectOnChange(value);
    }

    const handScroll = (e:any) => {
        e.persist();
        const { target } = e;
        if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
            setSearchParams({ ...searchParams, page: searchParams.page + 1 });
        }
    }
    const optionChildrens = optionsArr.map((item) => {
        return (<Option value={item.id} key={item.id}>{item.nick_name}</Option>)
    })
    return (
        <>
            <Select
                style={{ width: 200 }}
                showSearch
                placeholder='请选择客户'
                value={value}
                defaultActiveFirstOption={true}
                showArrow={true}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleChange}
                onPopupScroll={handScroll}
                notFoundContent={null}
            >
                {optionChildrens}
            </Select>
        </>
    );
}
export default TargetCustomerSelect;