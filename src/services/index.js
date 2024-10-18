import {Client} from '../api';

const Service = {
  getSubject: async level => {
    return await Client.get(
      `subjects.json?institution=1&curriculum=KurMer&level=${level}`,
      {
        headers: {'Content-Type': 'application/json'},
      },
    );
  },
};

export {Service};
