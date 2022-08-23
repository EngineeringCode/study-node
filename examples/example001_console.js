/*
    https://developer.mozilla.org/ko/docs/Web/API/console/clear
    console.clear()는 콘솔에 기록된 메시지를 모두 지웁니다.
*/
console.log("Hello!");
console.clear();
/*
    https://developer.mozilla.org/ko/docs/Web/API/console/log
    console.log()는 콘솔에 메시지를 출력합니다. 메시지는 단일 문자열이거나 자바스크립트 객체일 수 있습니다.
*/
console.log("Hello World!");
console.log("Hello World!", "Bye!");
/*
    https://developer.mozilla.org/en-US/docs/Web/API/console/info
    console.debug()는 메시지를 'info' 중요도(수준)로 콘솔에 출력합니다.
*/
console.info("info");
/*
    https://developer.mozilla.org/ko/docs/Web/API/console/debug
    console.debug()는 메시지를 'debug' 중요도(수준)로 콘솔에 출력합니다.
*/
console.debug("debug");
/*
    https://developer.mozilla.org/en-US/docs/Web/API/console/warn
    console.debug()는 메시지를 'warn' 중요도(수준)로 콘솔에 출력합니다.
*/
console.warn("warn");
/*
    https://developer.mozilla.org/en-US/docs/Web/API/console/error
    console.error()는 메시지를 'error' 중요도(수준)로 콘솔에 출력합니다.
*/
console.error("error");
/*
    https://developer.mozilla.org/ko/docs/Web/API/console/assert
    console.assert()는 조건이 거짓인 경우 콘솔에 오류 메시지를 출력합니다. 
*/
let number = 0;
console.assert(number==0,"true!");
console.assert(number==1,"false!");
console.assert(number==1,{number: 1, message: 'message'});
/*
    https://developer.mozilla.org/ko/docs/Web/API/console/count
    console.count()는 특정 레이블로 count()가 호출된 횟수를 출력합니다.
*/
console.count();
console.count();
console.count();
console.count('a');
console.count('a');
console.count('b');
/*
    https://developer.mozilla.org/ko/docs/Web/API/console/countReset
    console.countReset()는 특정 레이블로 count()가 호출된 횟수를 초기화합니다.
*/
console.countReset();
console.count();

/*
    https://developer.mozilla.org/en-US/docs/Web/API/console/dir
    console.dir()는 객체 정보를 콘솔에 출력합니다.
*/
//console.dir(document.location);

/*
    https://developer.mozilla.org/en-US/docs/Web/API/console/dirxml
    console.dirxml()는 XML 또는 HTML 요소를 계층적으로 콘솔에 출력합니다.
*/
//console.dirxml(document.location);

/*
    https://developer.mozilla.org/ko/docs/Web/API/console/group
    console.group()는 새로운 인라인 그룹을 생성합니다.
*/
console.log("Level 0");
console.group();
console.log("Level 1");
/*
    https://developer.mozilla.org/ko/docs/Web/API/console/groupCollapsed
    console.groupCollapsed()는 새로운 인라인 그룹을 생성합니다. 단, 그룹은 접혀있습니다.
*/
console.groupCollapsed();
console.log("Level 2");
/*
    https://developer.mozilla.org/ko/docs/Web/API/console/groupEnd
    console.groupEnd()는 인라인 그룹에서 나옵니다.
*/
console.groupEnd();
console.log("Level 1");
console.groupEnd();
console.log("Level 0");