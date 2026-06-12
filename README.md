# Directory 경로 

### Directory 경로
```
   app
   ├─ page.tsx -> root cms / 동적site
   ├─ layout.tsx
   ├─ service
   │  └─ BasePageHandler.ts
   ├─ cms -> 관리자 페이지 경로
   │  ├─ page.tsx -> 로그인 세션 검사에 따른 페이지 포워딩(main-session O / login-session X) 
   │  ├─ layout.tsx
   │  ├─ main
   │  │  ├─ page.tsx
   │  │  └─ service
   │  │     └─ ChartRlm1.tsx -> 코드가 길어지거나 외부 솔루션 사용 시 분리
   │  ├─ login
   │  │  ├─ page.tsx
   │  │  └─ service
   │  ├─ mng
   │  │  ├─ strct
   │  │  │  ├─ page.tsx
   │  │  │  └─ service
   │  │  │     └─ StrctEventHandler.ts
   │  │  ├─ menu
   │  │  │  ├─ page.tsx
   │  │  │  └─ service   
   │  │  ├─ conts
   │  │  │  ├─ page.tsx
   │  │  │  └─ service
   │  │  ├─ user
   │  │  │  ├─ page.tsx
   │  │  │  └─ service   
   │  │  ├─ authrt
   │  │  │  ├─ page.tsx
   │  │  │  └─ service   
   │  │  ├─ comCd
   │  │  │  ├─ page.tsx
   │  │  │  └─ service   
   │  │  └─ sysStng
   │  │     ├─ page.tsx
   │  │     └─ service
   components(사용자)
   │  ├─ base
   │  │  ├─ common
   │  │  │  ├─ DynamicPage.tsx
   │  │  │  ├─ DynamicContainerRederer.tsx
   │  │  │  ├─ DynamicFooterRederer.tsx
   │  │  │  ├─ DynamicGnbRederer.tsx
   │  │  │  └─ DynamicPrpgramRederer.tsx
   │  │  ├─ container
   │  │  │  ├─ BasicARlm.tsx
   │  │  │  └─ BasicBRlm.tsx
   │  │  ├─ layout
   │  │  │  ├─ footer
   │  │  │  │  ├─ FooterBasicACrcmf.tsx
   │  │  │  │  └─ FooterBasicBCrcmf.tsx
   │  │  │  └─ gnb
   │  │  │  │  ├─ GnbBasicACrcmf.tsx
   │  │  │  │  └─ GnbBasicBCrcmf.tsx
   │  │  ├─ program
   │  │  │     ├─ ButtonElmn.tsx
   │  │  │     ├─ Dropdown1Elmn.tsx
   │  │  │     ├─ Dropdown2Elmn.tsx
   │  │  │     ├─ JumbotronElmn.tsx
   │  │  │     ├─ RadioListGroupElmn.tsx
   │  │  │     └─ TextElmn.tsx
   │  │  └─ DynamicPage.tsx
   │  └─ cms
   │  │  └─ layout
   │  │     ├─ CmsGnbCrcmf.tsx
   │  │     └─ CmsLnbCrcmf.tsx
   server
   │  ├─ cms
   │  │  ├─ main
   │  │  │  └─ MainApi.ts
   │  │  ├─ login
   │  │  │  └─ LoginApi.ts
   │  │  ├─ mng
   │  │  │  ├─ strct
   │  │  │  │  └─ StrctApi.ts
   │  │  │  ├─ menu
   │  │  │  │  └─ MenuApi.ts
   │  │  │  ├─ conts
   │  │  │  │  └─ ContsApi.ts
   │  │  │  ├─ user
   │  │  │  │  └─ UserApi.ts
   │  │  │  ├─ authrt
   │  │  │  │  └─ AuthrtApi.ts
   │  │  │  ├─ comCd
   │  │  │  │  └─ ComCdApi.ts
   │  │  │  ├─ sysStng
   │  │  │  │  └─ SysStngApi.ts
   │  ├─ common 
   │  │  ├─ api -> API호출
   │  │  │  ├─ exception
   │  │  │  │   ├─ ExceptionType.ts
   │  │  │  │   ├─ ExceptionHandlerUtil.ts
   │  │  │  │   └─ LogUtil.ts
   │  │  │  ├─ EnvUtil.ts
   │  │  │  ├─ HmacUtil.ts
   │  │  │  ├─ HttpApi.ts
   │  │  │  ├─ TokenAccessApi.ts
   │  │  │  ├─ TokenHttpApi.ts
   │  │  │  └─ TokenStoreClass.ts
   styles
   type
      └─ BasePageType.ts
   
           
   ├─└─│     
```

## 명명법
1. 카멜케이스를 기본으로 한다.
2. 기본 tsx(page.tsx, layout.tsx)를 제외한 별도 component 생성은 첫글자를 대문자로 한다.
   - popup , Component명은 {명사}{역할}.tsx
   - ex) ComfirmPopupLayer.tsx
3. Data Handling <u>Component</u>의 경우 접미어(suffix)에 `Api` 를 붙여서 생성 ex) MenuApi
4. 사이트 컨텐츠에 사용되는 <u>Component</u>는 접미어(suffix)에 `Elmn`을 붙여서 생성 ex) ButtonElmn.tsx
5. 사이트 Layout에 사용되는 <u>Component</u>는 접미어(Suffix)에 `Crcmf`를 붙여서 생성
6. 사이트 구성에 사용되는 <u>Component</u>는 접미어(Suffix)에 `Rlm`를 붙여서 생성(Container)
7. Dynamic관련 Renderer는 명명법에서 제외하며 Dynamic{역할}Renderer로 정리하도록 한다.
8. 함수명
    - export default: 파일명
    - function
      - wfc_{대상event명}Event / wfc_{동작명}{주제}By{조건}
      <br> ex) wfc_onClickMainChartEvent / wfc_selectMenuById
      - 조건은 행위가 될 수 없고 데이터를 기준으로 한다.
      - 조건이 없는 경우 `By{조건}`구문을 제거할 수 있다.
      - eventFuntion 은 페이지 종속 , 기능펑션은 private
      - 동작명(함수명)은 sql(CRUD)명령어를 기준으로 한다
        - 만약 CRUD작업 외 연산을 하는경우에는 `is`, `has`, `calcu`
        - sql 쿼리 내용을 그대로 사용하는 경우가 아닌 결과값을 핸들링 하는 경우
        <br>연산 예시 ex) 조회한 내용을 가지고 포함여부 확인(has), 쿼리 내용물로 증명(is) 등
      - API를 호출하는 경우 접두어(prefix)에 `call`을 붙여서 생성
         - ex) call[API명] -> callToken
9. Type, Interface, Class
    - type: 접미어(suffix)에 `Type`을 붙여 생성 -> ex) type MainType 
    - interface: 접미어(suffix)에 `IF` -> ex)interface MainIF
    - class : 접미어(suffix)에 `Class` -> ex)class MainClass
   <br> function명, class구성 내에서는 은 `class`제거 후 작성
10. Util성 파일은 접미어(suffix)에 `Util`을 붙여서 생성
    - ex) EnvUtil.ts
11. 모든 변수 또는 명명에는 단어사전을 참고해서 만들 것
```script
   /DevTeam/프로젝트/W-CMS/doc/0. 분석설계/03.DB/단어정의서
``` 

### 주석
! method
```
/* 
* 용도 :
* 작성자 :
*/
```
! 중간중간 비즈니스로직 내에서는
`` // ``

### 토큰 발급

