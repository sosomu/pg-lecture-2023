import { shuffle } from './js/utils.mjs';



// HTML のパース完了後まで initialize の実行を遅延させるための処理
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

function initialize() {
    
}
