const BASE_URL = `${import.meta.env.VITE_DJANGO_BACKEND_URL}`


export const index = async () => {
    try {
      const res = await fetch(`${BASE_URL}/restaurants`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };


export const show = async (restaurantId) => {
    try {
      const res = await fetch(`${BASE_URL}/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  

export const create = async (formData) => {
  try {
      const res = await fetch(`${BASE_URL}/restaurants/`, {
          method: 'POST',
          headers: {
             Authorization: `Bearer ${localStorage.getItem('access')}`,
             'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
     })
     return res.json()
  } catch (error) {
      console.log(error)
  }
}




  export const createReview = async (reviewFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/reviews/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
      throw new error
    }
  };

  


  export const deleteRestaurant = async (restaurantId) => {
    try {
        const res = await fetch(`${BASE_URL}/restaurants/${restaurantId}/`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
  }

  export const update = async (restaurantId, formData) => {
    try {
     const res = await fetch(`${BASE_URL}/restaurants/${restaurantId}/`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
     }) 
     return res.json()  
   } catch (error) {
     console.log (error)
   }
}

export const deleteReview = async (reviewId) => {
    try {
        const res = await fetch(`${BASE_URL}/reviews/${reviewId}/`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            }
        })
    } catch (error) {
        console.log(error)
    }
  }
  

//   export const updateReview = async (reviewId, updatedFormData) => {
//     if (!updatedFormData.restaurant) {
//         throw new Error('Restaurant information is required');
//     }

//     try {
//         const res = await fetch(`${BASE_URL}/reviews/${reviewId}/`, {
//             method: 'PUT',
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('access')}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedFormData)
//         });

//         if (!res.ok) {
//             throw new Error('Failed to update the review');
//         }

//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

