var commentImpl = /** @class */ (function () {
    function commentImpl(id, desc, liked, replies) {
        if (liked === void 0) { liked = false; }
        if (replies === void 0) { replies = []; }
        this.id = id;
        this.desc = desc;
        this.liked = liked;
        this.replies = replies;
    }
    commentImpl.prototype.addReply = function (reply) {
        this.replies.push(reply);
    };
    commentImpl.prototype.removeReply = function (replyId) {
        this.replies = this.replies.filter(function (cmt) { return replyId !== cmt.id; });
    };
    return commentImpl;
}());
var cmt1 = new commentImpl(1, 'first comment', false);
var reply1 = new commentImpl(2, 'first reply', false);
cmt1.addReply(reply1);
function addComment(comment, parent) {
    var commonDiv = document.createElement('div');
    commonDiv.classList.add('comment');
    commonDiv.innerHTML = "\n    <h4>".concat(comment.desc, "</h4>\n    <input type='text'>\n    <button id='").concat(comment.id, "'>Reply</button>");
    if (comment.replies) {
        comment.replies.forEach(function (el) { return addComment(el, commonDiv); });
    }
    parent === null || parent === void 0 ? void 0 : parent.appendChild(commonDiv);
}
document.addEventListener('DOMContentLoaded', function () {
    var parent = document.getElementById('cmt-container');
    addComment(cmt1, parent);
});
