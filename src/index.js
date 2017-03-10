class Service {
  constructor(options) {
    if (!options) throw new Error('options must be set');
    if (!options.getService) throw new Error('options.getService must be set');

    Object.assign(this, options);
  }

  async find(params) {
    return this.getService(params).find(params);
  }

  async get(id, params) {
    return this.getService(params).get(id, params);
  }

  async create(data, params) {
    return this.getService(params).create(data, params);
  }

  async update(id, data, params) {
    return this.getService(params).update(id, data, params);
  }

  async patch(id, data, params) {
    return this.getService(params).patch(id, data, params);
  }

  async remove(id, params) {
    return this.getService(params).remove(id, params);
  }
}

export default function init(options) {
  return new Service(options);
}

init.Service = Service;
