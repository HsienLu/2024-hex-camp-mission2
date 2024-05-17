import { useEffect } from "react";
interface SectionCardProps {
    collectionsText: { 
        id: number; 
        name: string; 
        description: string; 
        tags: string[]; 
    };
}
const collectionsText = [
    {
      id: 1,
      name: '星際旅行訂票平台',
      description: '悠遊宇宙的夢想，從這裡開始實現',
      tags: ['網頁設計', '響應式設計', 'Bootstrap']
    },
    {
      id: 2,
      name: '理財App',
      description: '連動帳戶與行動支付，讓 AI 提供您最好的理財建議',
      tags: ['APP設計', 'iOS', 'React']
    },
    {
      id: 3,
      name: '醫美診所官網',
      description: '永保青春的秘密，從粹究開始',
      tags: ['網頁設計', '響應式設計', 'ＷordPress']
    },
    {
      id: 4,
      name: '美美美早餐店 POS 機 UI Design',
      description: '訂單送單一目瞭然，自動報表分析好輕鬆',
      tags: ['UI 設計', '前端開發', 'Wix']
    },
    {
      id: 5,
      name: '電影院訂票系統',
      description: '三步驟完成訂票，電腦手機都支援',
      tags: ['前端開發', '後端支援', 'Vue']
    },
    {
      id: 6,
      name: '巧克巧克形象官網設計',
      description: '三步驟完成訂票，電腦手機都支援',
      tags: ['UI設計', '設計系統', '網路電商']
    },
  ];
  const importImage = (num:string | number) => {
    const image = new URL(`../assets/image/work-image${num}.png`, import.meta.url).href;
    return image;
  };

function CollectionSection(){
    useEffect(()=>{
        const num1=importImage(1)
        console.log(num1)
        console.log(collectionsText)
      },[])
    return(<>
        <div className="container">
            <div className="row gy-10">
                
                    {
                    collectionsText.map((v)=>{
                        return(
                            <div className="col-6">
                            <SectionCard key={v.id} collectionsText ={v}></SectionCard>
                            </div>
                            )
                    })
                    }
                    
                
            </div>
        </div>
       
    </>)
}

function SectionCard({collectionsText}:SectionCardProps ){

    return(<>
        
        <div className="SectionCard">
            <div className="img-box border-1 border-primary-200 rounded-3 mb-3 overflow-hidden" >
                <img className="w-100" src={importImage(`${collectionsText.id}`)} alt="" />
            </div>
            <div className="text-box mb-4 ms-3">
                <h4 className="text-primary-700 mb-2" style={{fontSize:'28px',fontWeight:'700'}}>{collectionsText.name}</h4>
                <p className="fs-6 text-primary-500">{collectionsText.description}</p>
            </div>
            <SectionCardTag ></SectionCardTag>
        </div>
    </>)
}
function SectionCardTag(){
    return(
        <>
        <div className="SectionCardTag d-flex ms-3" style={{gap:'1rem'}}>
            {collectionsText[0].tags.map((j, index) => 
                {
                    return (
                        <p className="fs-6 bg-primary-200 d-inline" style={{padding:'4px 12px',borderRadius:'16px'}} key={index}>{j}</p>
                    )
                })
            }
            
        </div>
        </>
    )
}


export default CollectionSection