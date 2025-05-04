'use client'

// import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Tabs } from 'flowbite'
import { useState } from 'react'



export default function Modal({ open, onClose }) {
    const [activeTab, setActiveTab] = useState('data-diri');

    const tabs = [
      { id: 'data-diri', label: 'Data Diri' },
      { id: 'data-mobil', label: 'Data Mobil' },
      { id: 'lokasi', label: 'Lokasi & Waktu' },
      { id: 'konfirmasi', label: 'Konfirmasi' },
    ];
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });
      

return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="">
                <div className="mt-3 text-center sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900 sm:w-full">
                    Form Pemesanan Inspeksi
                  </DialogTitle>
                
                  <div className="mb-4 mt-3 border-b border-gray-200">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                      {tabs.map((tab) => (
                        <li key={tab.id} className="me-2">
                          <button
                            className={`inline-block px-2 py-1 border-b-2 ${
                              activeTab === tab.id
                                ? 'text-[#192459] border-[#E47F3A]'
                                : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300'
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                          >
                            {tab.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div >
                    {activeTab === 'data-diri' && (
                        <div className='p-4'>
                            <div className="rounded-lg flex items-center gap-4 mb-4">
                              <label htmlFor="name" className="text-sm text-gray-500 w-24">Nama:</label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              />
                            </div>
                            <div className="rounded-lg flex items-center gap-4 mb-4">
                              <label htmlFor="phone" className="text-sm text-gray-500 w-24">No Telp:</label>
                              <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              />
                            </div>
                            <div className=" rounded-lg flex items-center gap-4 mb-4">
                              <label htmlFor="email" className="text-sm text-gray-500 w-24">Email:</label>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              />
                            </div>
                      </div>
                      
                    )}
                    {activeTab === 'data-mobil' && (
                      <div className='p-4'>
                          <div className="rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="merek" className="text-sm text-gray-500 w-24">Merek:</label>
                            <input
                              type="text"
                              name="merek"
                              id="merek"
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className="rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="model" className="text-sm text-gray-500 w-24">Model:</label>
                            <input
                              type="text"
                              name="model"
                              id="model"
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className=" rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="varian" className="text-sm text-gray-500 w-24">Varian:</label>
                            <input
                              type="text"
                              name="varian"
                              id="varian"
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className=" rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="tahunProduksi" className="text-sm text-gray-500 w-24">Tahun Produksi:</label>
                            <input
                              type="text"
                              name="tahunProduksi"
                              id="tahunProduksi"
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className=" rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="keterangan" className="text-sm text-gray-500 w-24">Warna:</label>
                            <input
                              type="text"
                              name="warna"
                              id="warna"
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className="rounded-lg flex items-start gap-4 mb-4">
                              <label htmlFor="keterangan" className="text-sm text-gray-500 w-24 pt-2">Keterangan:</label>
                              <textarea
                                name="keterangan"
                                id="keterangan"
                                rows="3"
                                className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 resize-none"
                              ></textarea>
                            </div>  
                        </div>
                    )}
                    {activeTab === 'lokasi' && (
                      <div className="p-4 rounded-lg">
                        <div className='p-4'>
                            <div className="rounded-lg flex items-start gap-4 mb-4">
                              <label htmlFor="alamat" className="text-sm text-gray-500 w-24 pt-2">Alamat:</label>
                              <textarea
                                name="alamat"
                                id="alamat"
                                rows="3"
                                className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 resize-none"
                              ></textarea>
                            </div>
                            <div className="rounded-lg flex items-center gap-4 mb-4">
                              <label htmlFor="tanggal" className="text-sm text-gray-500 w-24">Tanggal:</label>
                              <input
                                type="date"
                                name="tanggal"
                                id="tanggal"
                                className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              />
                            </div>
                            <div className=" rounded-lg flex items-center gap-4 mb-4">
                              <label htmlFor="jam" className="text-sm text-gray-500 w-24">Pukul:</label>
                              <input
                                type="time"
                                name="jam"
                                id="jam"
                                className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              />
                            </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 'konfirmasi' && (    
                        <div className="p-4 space-y-6 text-sm">
                          {/* Data Diri */}
                          <div>
                            <p className="text-sm text-[#E47F3A] mb-3">Data Diri</p>
                            <div className="grid grid-cols-[150px_1fr] gap-y-2 gap-x-4">
                              <span className="text-gray-500">Nama</span>
                              <span>Agus Santoso</span>

                              <span className="text-gray-500">No. HP</span>
                              <span>0812-3456-7890</span>

                              <span className="text-gray-500">Email</span>
                              <span>agus@example.com</span>
                            </div>
                          </div>

                          {/* Data Mobil */}
                          <div>
                            <p className="text-sm text-[#E47F3A] mb-3">Data Mobil</p>
                            <div className="grid grid-cols-[150px_1fr] gap-y-2 gap-x-4">
                              <span className="text-gray-500">Merek</span>
                              <span>Toyota</span>

                              <span className="text-gray-500">Model</span>
                              <span>Inova Reborn</span>

                              <span className="text-gray-500">Varian</span>
                              <span>2.4 V Diesel A/T</span>

                              <span className="text-gray-500">Tahun Produksi</span>
                              <span>2019</span>

                              <span className="text-gray-500">Warna Mobil</span>
                              <span>Silver Metalik</span>

                              <span className="text-gray-500">Keterangan</span>
                              <span>
                                Mobil ini sedang saya incar dari penjual/showroom di area Jogja. Saya ingin memastikan kondisi keseluruhan mobil, baik eksterior, interior, mesin, kaki-kaki, dan kelengkapan dokumennya sebelum mengambil keputusan untuk membeli. Diajukan untuk pengecekan menyeluruh agar terhindar dari risiko beli mobil bermasalah.
                              </span>
                            </div>
                          </div>

                          {/* Lokasi & Waktu */}
                          <div>
                            <p className="text-sm text-[#E47F3A] mb-3">Lokasi & Waktu</p>
                            <div className="grid grid-cols-[150px_1fr] gap-y-2 gap-x-4">
                              <span className="text-gray-500">Alamat</span>
                              <span>
                                Bulaksumur, Kec. Depok, Kabupaten Sleman,
                                Daerah Istimewa Yogyakarta 55281
                              </span>

                              <span className="text-gray-500">Tanggal Inspeksi</span>
                              <span>23/08/2025</span>

                              <span className="text-gray-500">Pukul</span>
                              <span>13.00</span>
                            </div>
                          </div>
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className=" px-4 py-3 sm:flex sm:justify-end sm:gap-3 sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                    if (formData.name && formData.phone && formData.email) {
                      setActiveTab('data-mobil');
                    } else {
                      alert('Mohon lengkapi semua data diri.');
                    }
                  }}
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
              >
                Selanjutnya
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
