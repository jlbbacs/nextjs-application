"use client";

interface DeleteButtonProps {
  postId: number;
  deleteAction: (formData: FormData) => Promise<void>; // Pass the action as a prop
}

export default function DeleteButton({ postId, deleteAction }: DeleteButtonProps) {
  return (
    <form
      action={deleteAction}
      onSubmit={(e) => {
        if (!confirm("Are you sure you want to delete this?")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={postId} />
      <button
        type="submit"
        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 9 2 2 4-4" />
        </svg>
      </button>
    </form>
  );
}