import Swal from 'sweetalert2';

export const usePreviewModal = (description: string, imageUrl: string) => {
  const open = () => {
    Swal.fire({
      text: description,
      imageUrl,
      background: '#333',
      color: '#eaeaea',
      grow: 'row',
      padding: 20,
      showConfirmButton: false
    });
  };
  return { open };
};
