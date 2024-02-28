import Swal from 'sweetalert2';

export const usePreviewModal = (description: string, imageUrl: string) => {
  const imageHeight = window.innerWidth > 425 ? 550 : 250;
  const open = () => {
    Swal.fire({
      text: description,
      imageUrl,
      background: '#333',
      color: '#eaeaea',
      grow: 'row',
      padding: 20,
      imageHeight,
      showConfirmButton: false,
      customClass: { image: 'modal' },
      showCloseButton: true
    });
  };
  return { open };
};
