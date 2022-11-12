import { Component, createSignal } from "solid-js";


export type TriggerModalProps = {
    children?: any;
}

export const TriggerModal: Component<TriggerModalProps> = (props) => {

    const [canScroll, setCanScroll] = createSignal(true);

    const toggleScroll = () => { 
        setCanScroll(!canScroll());
        if(!canScroll()) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <label for="my-modal-3" class="btn" onClick={toggleScroll}>
            {props.children}
        </label>
    );
}

export const Modal: Component = () => {
    return (
        <>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    );
};