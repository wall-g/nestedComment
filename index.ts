interface CommentData {
    id: number;
    desc: string;
    liked: boolean;
    replies: CommentData[];
}

class commentImpl implements CommentData {

    id: number;
    desc: string;
    liked: boolean;
    replies: CommentData[];

    constructor(id: number, desc: string, liked: boolean = false, replies: CommentData[] = []) {
        this.id = id;
        this.desc = desc;
        this.liked = liked;
        this.replies = replies;
    }

    addReply(reply: CommentData) {
        this.replies.push(reply);
    }

    removeReply(replyId: number) {
        this.replies = this.replies.filter((cmt) => replyId !== cmt.id);
    }

}

let cmt1 = new commentImpl(1, 'first comment', false);
function addComment(comment: CommentData, parent: HTMLElement | null) {
    const commonDiv = document.createElement('div');
    commonDiv.classList.add('comment');
    commonDiv.innerHTML = `
    <h4>${comment.desc}</h4>
    <input type='text'>
    <button id='${comment.id}'>Reply</button>`
    if (comment.replies) {
        comment.replies.forEach((el) => addComment(el, commonDiv))
    }
    parent?.appendChild(commonDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById('cmt-container');
    addComment(cmt1, parent);
})






