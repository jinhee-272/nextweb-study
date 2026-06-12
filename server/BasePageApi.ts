import {LayoutType, layoutTypeMap, ProgramData} from "@/type/BasePageType";

export function handleAPI()
{
    // 화면이동
    const handleSearch = async (formData: FormData):Promise<ProgramData> => {
        const values = Object.fromEntries(
            formData.entries()
        );
        console.log('formData Chk!!!! ',values);

        // 저장
        if(formData.get('submitData') == 'Y'){
            try{
                // api Test용
                const res = await fetch('https://httpbin.org/post', {
                    method: 'POST',
                    // headers: {"Content-Type": "multipart/form-data"},
                    body: formData,
                });

                if(!res.ok){
                    throw new Error('Fail save Formdata(API)');
                }
                console.log('Formdata(API)',res.ok)
            } catch (e){
                console.error('handleFormData api error',e);
            }
        }
        const layoutType = formData.get('layoutType') as LayoutType;
        // // 화면정보
        // try{
        //     const res = await fetch('api url', {
        //         method: 'POST',
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify({
        //             layoutType: layoutType,
        //         }), /* layout 키값 */
        //     });
        //
        //     if(!res.ok){
        //         throw new Error('Fail get Layout(API)');
        //     }
        //
        //     return await res.json();
        //
        // } catch (e){
        //     console.error('handleSearch api error',e);
        //     throw layoutTypeMap['A'];
        // }
        return layoutTypeMap[layoutType];
    };

    return {handleSearch};
}
