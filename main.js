$(function () {
    //クラス"MainContainer-player"を復元するための識別用にクラス"MainContainer-player-backup"を追加
    $('.MainContainer-player').addClass('MainContainer-player-backup');

    chrome.storage.local.get(["comment_invisible_mode"], function (pattern) {
        var select_mode = pattern.comment_invisible_mode;
        if ("future_enable" == select_mode) {
            $('.MainContainer-player-backup').addClass('MainContainer-player');
            $('.MainContainer-playerPanel').css('display', 'block');
            $('.PlayerContainer').css('background-color', '#000');
            $('.VideoContainer').css('margin', '');
            $('.CommentOnOffButton').before('<button id="comments-disable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示しない(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M8.333 6.729H15v-1.75H8.333Zm0 2.479H15v-1.75H8.333Zm0 2.48h4.188v-1.75H8.333ZM5.875 6.729q.354 0 .615-.26.26-.261.26-.615t-.26-.614q-.261-.261-.615-.261t-.615.261Q5 5.5 5 5.854t.26.615q.261.26.615.26Zm0 2.479q.354 0 .615-.26.26-.26.26-.615 0-.354-.26-.614-.261-.261-.615-.261t-.615.261q-.26.26-.26.614 0 .355.26.615.261.26.615.26Zm0 2.48q.354 0 .615-.261.26-.26.26-.615 0-.354-.26-.614-.261-.26-.615-.26t-.615.26q-.26.26-.26.614 0 .355.26.615.261.261.615.261Zm-4.208 6.645V3.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v9.833q0 .729-.51 1.24-.511.51-1.24.51H5Zm1.75-4.229.854-.854h12.312V3.417H3.417Zm0-10.687v10.687Z"/></svg></div><buton>');
        } else if ("future_disable" == select_mode) {
            $('.MainContainer-player-backup').removeClass('MainContainer-player');
            $('.MainContainer-playerPanel').css('display', 'none');
            $('.VideoContainer').css('margin', '0 auto');
            $('.PlayerContainer').css('background-color', '#252525');
            $('.CommentOnOffButton').before('<button id="comments-enable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示する(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.833 11.708q-.354 0-.614-.26-.261-.26-.261-.615 0-.354.261-.614.26-.261.614-.261.355 0 .615.261.26.26.26.614 0 .355-.26.615t-.615.26Zm11.563 3.084-1.479-1.459h.666V3.417H6l-1.75-1.75h12.417q.687 0 1.177.489.489.49.489 1.177v10q0 .542-.281.917t-.656.542ZM9.354 6.75 8.333 5.729V5H15v1.75Zm2.417 2.417-1.75-1.75H15v1.75Zm5.312 10.25L12.625 15H5l-3.333 3.333V4L.583 2.917l1.229-1.229 16.5 16.5ZM3.417 5.75v8.354l.854-.854h6.646Zm7.541 2.625ZM7.167 9.5Zm-1.334-.292q-.354 0-.614-.26-.261-.26-.261-.615 0-.354.261-.614.26-.261.614-.261.355 0 .615.261.26.26.26.614 0 .355-.26.615t-.615.26Z"/></svg></div><buton>');
        } else {
            $('.MainContainer-player-backup').addClass('MainContainer-player');
            $('.MainContainer-playerPanel').css('display', 'block');
            $('.VideoContainer').css('margin', '');
            $('.PlayerContainer').css('background-color', '#000');
            $('.CommentOnOffButton').before('<button id="comments-disable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示しない(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M8.333 6.729H15v-1.75H8.333Zm0 2.479H15v-1.75H8.333Zm0 2.48h4.188v-1.75H8.333ZM5.875 6.729q.354 0 .615-.26.26-.261.26-.615t-.26-.614q-.261-.261-.615-.261t-.615.261Q5 5.5 5 5.854t.26.615q.261.26.615.26Zm0 2.479q.354 0 .615-.26.26-.26.26-.615 0-.354-.26-.614-.261-.261-.615-.261t-.615.261q-.26.26-.26.614 0 .355.26.615.261.26.615.26Zm0 2.48q.354 0 .615-.261.26-.26.26-.615 0-.354-.26-.614-.261-.26-.615-.26t-.615.26q-.26.26-.26.614 0 .355.26.615.261.261.615.261Zm-4.208 6.645V3.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v9.833q0 .729-.51 1.24-.511.51-1.24.51H5Zm1.75-4.229.854-.854h12.312V3.417H3.417Zm0-10.687v10.687Z"/></svg></div><buton>');
        };
    });

    //コメント欄、非表示
    $(document).on("click", "#comments-disable-ex", function () {
        $('.MainContainer-player-backup').removeClass('MainContainer-player');
        $('#comments-disable-ex').remove();
        $('.MainContainer-playerPanel').css('display', 'none');
        $('.VideoContainer').css('margin', '0 auto');
        $('.PlayerContainer').css('background-color', '#252525');
        $('.CommentOnOffButton').before('<button id="comments-enable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示する(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.833 11.708q-.354 0-.614-.26-.261-.26-.261-.615 0-.354.261-.614.26-.261.614-.261.355 0 .615.261.26.26.26.614 0 .355-.26.615t-.615.26Zm11.563 3.084-1.479-1.459h.666V3.417H6l-1.75-1.75h12.417q.687 0 1.177.489.489.49.489 1.177v10q0 .542-.281.917t-.656.542ZM9.354 6.75 8.333 5.729V5H15v1.75Zm2.417 2.417-1.75-1.75H15v1.75Zm5.312 10.25L12.625 15H5l-3.333 3.333V4L.583 2.917l1.229-1.229 16.5 16.5ZM3.417 5.75v8.354l.854-.854h6.646Zm7.541 2.625ZM7.167 9.5Zm-1.334-.292q-.354 0-.614-.26-.261-.26-.261-.615 0-.354.261-.614.26-.261.614-.261.355 0 .615.261.26.26.26.614 0 .355-.26.615t-.615.26Z"/></svg></div><buton>');
    });

    //コメント欄、表示
    $(document).on("click", "#comments-enable-ex", function () {
        $('.MainContainer-player-backup').addClass('MainContainer-player');
        $('#comments-enable-ex').remove();
        $('.MainContainer-playerPanel').css('display', 'block');
        $('.VideoContainer').css('margin', '');
        $('.PlayerContainer').css('background-color', '#000');
        $('.CommentOnOffButton').before('<button id="comments-disable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示しない(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M8.333 6.729H15v-1.75H8.333Zm0 2.479H15v-1.75H8.333Zm0 2.48h4.188v-1.75H8.333ZM5.875 6.729q.354 0 .615-.26.26-.261.26-.615t-.26-.614q-.261-.261-.615-.261t-.615.261Q5 5.5 5 5.854t.26.615q.261.26.615.26Zm0 2.479q.354 0 .615-.26.26-.26.26-.615 0-.354-.26-.614-.261-.261-.615-.261t-.615.261q-.26.26-.26.614 0 .355.26.615.261.26.615.26Zm0 2.48q.354 0 .615-.261.26-.26.26-.615 0-.354-.26-.614-.261-.26-.615-.26t-.615.26q-.26.26-.26.614 0 .355.26.615.261.261.615.261Zm-4.208 6.645V3.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v9.833q0 .729-.51 1.24-.511.51-1.24.51H5Zm1.75-4.229.854-.854h12.312V3.417H3.417Zm0-10.687v10.687Z"/></svg></div><buton>');
    });

    //全画面表示切り替え時の挙動
    $(document).on("click", ".EnableFullScreenButton", function () {

        if ($('#comments-enable-ex').length) {
            $('.MainContainer-player-backup').addClass('MainContainer-player');
            $('.MainContainer-player-backup').addClass('MainContainer-player-D');
            $('#comments-enable-ex').remove();
            $('#comments-disable-ex').remove();
            $('.MainContainer-playerPanel').css('display', 'block');
            $('.VideoContainer').css('margin', '');

            $(document).on("click", ".DisableFullScreenButton", function () {
                $('.comments-ex-class').css('display', '');
                $('.MainContainer-player-backup').removeClass('MainContainer-player');
                $('.MainContainer-player-backup').removeClass('MainContainer-player-D');
                $('.MainContainer-playerPanel').css('display', 'none');
                $('.VideoContainer').css('margin', '0 auto');
                $('#comments-disable-ex').remove();
                $('#comments-enable-ex').remove();
                $('.CommentOnOffButton').before('<button id="comments-enable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示する(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.833 11.708q-.354 0-.614-.26-.261-.26-.261-.615 0-.354.261-.614.26-.261.614-.261.355 0 .615.261.26.26.26.614 0 .355-.26.615t-.615.26Zm11.563 3.084-1.479-1.459h.666V3.417H6l-1.75-1.75h12.417q.687 0 1.177.489.489.49.489 1.177v10q0 .542-.281.917t-.656.542ZM9.354 6.75 8.333 5.729V5H15v1.75Zm2.417 2.417-1.75-1.75H15v1.75Zm5.312 10.25L12.625 15H5l-3.333 3.333V4L.583 2.917l1.229-1.229 16.5 16.5ZM3.417 5.75v8.354l.854-.854h6.646Zm7.541 2.625ZM7.167 9.5Zm-1.334-.292q-.354 0-.614-.26-.261-.26-.261-.615 0-.354.261-.614.26-.261.614-.261.355 0 .615.261.26.26.26.614 0 .355-.26.615t-.615.26Z"/></svg></div><buton>');
            })
        } else if ($('#comments-disable-ex').length) {
            $('.MainContainer-player-backup').addClass('MainContainer-player');
            $('.MainContainer-player-backup').addClass('MainContainer-player-E');
            $('#comments-disable-ex').remove();
            $('#comments-enable-ex').remove();
            $('.MainContainer-playerPanel').css('display', 'block');
            $('.VideoContainer').css('margin', '');

            $(document).on("click", ".DisableFullScreenButton", function () {
                $('.comments-ex-class').css('display', '');
                $('.MainContainer-player-backup').addClass('MainContainer-player');
                $('.MainContainer-player-backup').removeClass('MainContainer-player-E');
                $('.MainContainer-playerPanel').css('display', 'block');
                $('.VideoContainer').css('margin', '');
                $('#comments-disable-ex').remove();
                $('#comments-enable-ex').remove();
                $('.CommentOnOffButton').before('<button id="comments-disable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示しない(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M8.333 6.729H15v-1.75H8.333Zm0 2.479H15v-1.75H8.333Zm0 2.48h4.188v-1.75H8.333ZM5.875 6.729q.354 0 .615-.26.26-.261.26-.615t-.26-.614q-.261-.261-.615-.261t-.615.261Q5 5.5 5 5.854t.26.615q.261.26.615.26Zm0 2.479q.354 0 .615-.26.26-.26.26-.615 0-.354-.26-.614-.261-.261-.615-.261t-.615.261q-.26.26-.26.614 0 .355.26.615.261.26.615.26Zm0 2.48q.354 0 .615-.261.26-.26.26-.615 0-.354-.26-.614-.261-.26-.615-.26t-.615.26q-.26.26-.26.614 0 .355.26.615.261.261.615.261Zm-4.208 6.645V3.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v9.833q0 .729-.51 1.24-.511.51-1.24.51H5Zm1.75-4.229.854-.854h12.312V3.417H3.417Zm0-10.687v10.687Z"/></svg></div><buton>');
            })
        }
    })
});
$(function () {
    document.addEventListener('keydown', comments_enable_ex_FD, false);
    function comments_enable_ex_FD(event) {
        if (event.code === "Escape") {
            if ($('.MainContainer-player-E').length) {
                $('.comments-ex-class').css('display', '');
                $('.MainContainer-player-backup').addClass('MainContainer-player');
                $('.MainContainer-player-backup').removeClass('MainContainer-player-E');
                $('.MainContainer-playerPanel').css('display', 'block');
                $('.VideoContainer').css('margin', '');
                $('#comments-disable-ex').remove();
                $('.CommentOnOffButton').before('<button id="comments-disable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示しない(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M8.333 6.729H15v-1.75H8.333Zm0 2.479H15v-1.75H8.333Zm0 2.48h4.188v-1.75H8.333ZM5.875 6.729q.354 0 .615-.26.26-.261.26-.615t-.26-.614q-.261-.261-.615-.261t-.615.261Q5 5.5 5 5.854t.26.615q.261.26.615.26Zm0 2.479q.354 0 .615-.26.26-.26.26-.615 0-.354-.26-.614-.261-.261-.615-.261t-.615.261q-.26.26-.26.614 0 .355.26.615.261.26.615.26Zm0 2.48q.354 0 .615-.261.26-.26.26-.615 0-.354-.26-.614-.261-.26-.615-.26t-.615.26q-.26.26-.26.614 0 .355.26.615.261.261.615.261Zm-4.208 6.645V3.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v9.833q0 .729-.51 1.24-.511.51-1.24.51H5Zm1.75-4.229.854-.854h12.312V3.417H3.417Zm0-10.687v10.687Z"/></svg></div><buton>');
            } else if ($('.MainContainer-player-D').length) {
                $('.comments-ex-class').css('display', '');
                $('.MainContainer-player-backup').removeClass('MainContainer-player');
                $('.MainContainer-player-backup').removeClass('MainContainer-player-D');
                $('.MainContainer-playerPanel').css('display', 'none');
                $('.VideoContainer').css('margin', '0 auto');
                $('#comments-disable-ex').remove();
                $('#comments-enable-ex').remove();
                $('.CommentOnOffButton').before('<button id="comments-enable-ex" class="ActionButton ControllerButton comments-ex-class" data-title="コメント欄を表示する(拡張機能)"><div class="ControllerButton-inner"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.833 11.708q-.354 0-.614-.26-.261-.26-.261-.615 0-.354.261-.614.26-.261.614-.261.355 0 .615.261.26.26.26.614 0 .355-.26.615t-.615.26Zm11.563 3.084-1.479-1.459h.666V3.417H6l-1.75-1.75h12.417q.687 0 1.177.489.489.49.489 1.177v10q0 .542-.281.917t-.656.542ZM9.354 6.75 8.333 5.729V5H15v1.75Zm2.417 2.417-1.75-1.75H15v1.75Zm5.312 10.25L12.625 15H5l-3.333 3.333V4L.583 2.917l1.229-1.229 16.5 16.5ZM3.417 5.75v8.354l.854-.854h6.646Zm7.541 2.625ZM7.167 9.5Zm-1.334-.292q-.354 0-.614-.26-.261-.26-.261-.615 0-.354.261-.614.26-.261.614-.261.355 0 .615.261.26.26.26.614 0 .355-.26.615t-.615.26Z"/></svg></div><buton>');
            }
        }
    };
});
$(function () {
    //コメント欄を表示で保存
    $(document).on("click", "#comments-disable-ex", function () {

        chrome.storage.local.set(
            {
                "comment_invisible_mode": "future_disable",

            }
        );
    });

    //コメント欄を非表示で保存
    $(document).on("click", "#comments-enable-ex", function () {

        chrome.storage.local.set(
            {
                "comment_invisible_mode": "future_enable",
            }
        );
    });
});
