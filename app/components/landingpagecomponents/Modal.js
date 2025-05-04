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

    const currentTabIndex = tabs.findIndex(tab => tab.id === activeTab);

    const goToNextTab = () => {
      if (currentTabIndex < tabs.length - 1) {
        setActiveTab(tabs[currentTabIndex + 1].id);
      }
    };
    
    const goToPreviousTab = () => {
      if (currentTabIndex > 0) {
        setActiveTab(tabs[currentTabIndex - 1].id);
      }
    };

    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        merek: '',
        model: '',
        varian: '',
        tahunProduksi: '',
        warna: '',
        keterangan: '',
        alamat: '',
        tanggal: '',
        jam: ''
    });

    const handleSubmitToWhatsApp = () => {
        const message = `
Hallo, saya ingin memesan jasa inspeksi mobil:

*Data Diri*
- Nama: ${formData.name}
- No. HP: ${formData.phone}
- Email: ${formData.email}

*Data Mobil*
- Merek: ${formData.merek}
- Model: ${formData.model}
- Varian: ${formData.varian}
- Tahun Produksi: ${formData.tahunProduksi}
- Warna Mobil: ${formData.warna}
- Keterangan: ${formData.keterangan || '-'}

*Lokasi & Waktu*
- Tanggal: ${formData.tanggal}
- Pukul: ${formData.jam}
- Alamat: ${formData.alamat}

Terimakasih.
      `;

        const phoneNumber = '62895380067457'; // Ganti dengan nomor WA tujuan
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
        window.open(whatsappUrl, '_blank');
      };
      
      

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
                            className={`inline-block px-2 py-1 border-b-2 cursor-pointer ${
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
                              value={formData.merek}
                                onChange={(e) => setFormData({ ...formData, merek: e.target.value })}
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className="rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="model" className="text-sm text-gray-500 w-24">Model:</label>
                            <input
                              type="text"
                              name="model"
                              id="model"
                              value={formData.model}
                                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className=" rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="varian" className="text-sm text-gray-500 w-24">Varian:</label>
                            <input
                              type="text"
                              name="varian"
                              id="varian"
                              value={formData.varian}
                              onChange={(e) => setFormData({ ...formData, varian: e.target.value })}
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className=" rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="tahunProduksi" className="text-sm text-gray-500 w-24">Tahun Produksi:</label>
                            <input
                              type="text"
                              name="tahunProduksi"
                              id="tahunProduksi"
                              value={formData.tahunProduksi}
                                onChange={(e) => setFormData({ ...formData, tahunProduksi: e.target.value })}
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className=" rounded-lg flex items-center gap-4 mb-4">
                            <label htmlFor="keterangan" className="text-sm text-gray-500 w-24">Warna:</label>
                            <input
                              type="text"
                              name="warna"
                              id="warna"
                              value={formData.warna}
                              onChange={(e) => setFormData({ ...formData, warna: e.target.value })}
                              className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                          </div>
                          <div className="rounded-lg flex items-start gap-4 mb-4">
                              <label htmlFor="keterangan" className="text-sm text-gray-500 w-24 pt-2">Keterangan:</label>
                              <textarea
                                name="keterangan"
                                id="keterangan"
                                rows="3"
                                value={formData.keterangan}
                                onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
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
                                value={formData.alamat}
                                onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                                className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 resize-none"
                              ></textarea>
                            </div>
                            <div className="rounded-lg flex items-center gap-4 mb-4">
                              <label htmlFor="tanggal" className="text-sm text-gray-500 w-24">Tanggal:</label>
                              <input
                                type="date"
                                name="tanggal"
                                id="tanggal"
                                value={formData.tanggal}
                                onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                                className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              />
                            </div>
                            <div className=" rounded-lg flex items-center gap-4 mb-4">
                              <label htmlFor="jam" className="text-sm text-gray-500 w-24">Pukul:</label>
                              <input
                                type="time"
                                name="jam"
                                id="jam"
                                value={formData.jam}
                                onChange={(e) => setFormData({ ...formData, jam: e.target.value })}
                                className="w-full h-8 sm:h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              />
                            </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 'konfirmasi' && (
                      <div className="p-4 space-y-6 text-sm">
                        {Object.values(formData).every(value => !value) && (
                          <div className="text-center mb-4">Data Belum Terisi</div>
                        )}                  

                        <>
                          {/* Data Diri */}
                          <div>
                            <p className="text-sm text-[#E47F3A] mb-3">Data Diri</p>
                            <div className="grid grid-cols-[150px_1fr] gap-y-2 gap-x-4">
                              <span className="text-gray-500">Nama</span>
                              <span>{formData.name || '-'}</span>                   

                              <span className="text-gray-500">No. HP</span>
                              <span>{formData.phone || '-'}</span>                  

                              <span className="text-gray-500">Email</span>
                              <span>{formData.email || '-'}</span>
                            </div>
                          </div>                    

                          {/* Data Mobil */}
                          <div>
                            <p className="text-sm text-[#E47F3A] mb-3">Data Mobil</p>
                            <div className="grid grid-cols-[150px_1fr] gap-y-2 gap-x-4">
                              <span className="text-gray-500">Merek</span>
                              <span>{formData.merek || '-'}</span>                  

                              <span className="text-gray-500">Model</span>
                              <span>{formData.model || '-'}</span>                  

                              <span className="text-gray-500">Varian</span>
                              <span>{formData.varian || '-'}</span>                 

                              <span className="text-gray-500">Tahun Produksi</span>
                              <span>{formData.tahunProduksi || '-'}</span>                  

                              <span className="text-gray-500">Warna Mobil</span>
                              <span>{formData.warna || '-'}</span>                  

                              <span className="text-gray-500">Keterangan</span>
                              <span>{formData.keterangan || '-'}</span>
                            </div>
                          </div>                    

                          {/* Lokasi & Waktu */}
                          <div>
                            <p className="text-sm text-[#E47F3A] mb-3">Lokasi & Waktu</p>
                            <div className="grid grid-cols-[150px_1fr] gap-y-2 gap-x-4">
                              <span className="text-gray-500">Alamat</span>
                              <span>{formData.alamat || '-'}</span>                 

                              <span className="text-gray-500">Tanggal Inspeksi</span>
                              <span>{formData.tanggal || '-'}</span>                    

                              <span className="text-gray-500">Pukul</span>
                              <span>{formData.jam || '-'}</span>
                            </div>
                          </div>                    

                          {/* Peringatan Data yang Belum Terisi */}
                          {(
                            !formData.name ||
                            !formData.phone ||
                            !formData.email ||
                            !formData.merek ||
                            !formData.model ||
                            !formData.varian ||
                            !formData.tahunProduksi ||
                            !formData.warna ||
                            !formData.alamat ||
                            !formData.tanggal ||
                            !formData.jam
                          ) && (
                            <div className="text-red-500 text-sm mt-4">
                              <p>Perhatian! Beberapa data belum terisi:</p>
                              <ul>
                                {!formData.name && <li>- Nama</li>}
                                {!formData.phone && <li>- No. HP</li>}
                                {!formData.email && <li>- Email</li>}
                                {!formData.merek && <li>- Merek Mobil</li>}
                                {!formData.model && <li>- Model Mobil</li>}
                                {!formData.varian && <li>- Varian Mobil</li>}
                                {!formData.tahunProduksi && <li>- Tahun Produksi</li>}
                                {!formData.warna && <li>- Warna Mobil</li>}
                                {!formData.alamat && <li>- Alamat</li>}
                                {!formData.tanggal && <li>- Tanggal Inspeksi</li>}
                                {!formData.jam && <li>- Pukul</li>}
                              </ul>
                            </div>
                          )}
                        </>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pt-3 pb-5 sm:flex sm:justify-end sm:gap-3 sm:px-6">
            {currentTabIndex > 0 && (
                  <button
                    className="px-3 py-2 bg-gray-200 rounded cursor-pointer text-sm hover:bg-gray-400 hover:text-white"
                    onClick={goToPreviousTab}
                  >
                    Kembali
                  </button>
                )}

                {currentTabIndex < tabs.length - 1 ? (
                  <button
                    className="px-3 py-2 bg-blue-600 text-white rounded cursor-pointer text-sm hover:bg-blue-500 hover:text-white" 
                    onClick={goToNextTab}
                  >
                    Selanjutnya
                  </button>
                ) : (
                    (
                        (!formData.name || !formData.phone || !formData.email || !formData.merek || !formData.model || !formData.varian || !formData.tahunProduksi || !formData.warna || !formData.alamat || !formData.tanggal || !formData.jam) ? (
                          <button
                            className="px-3 py-2 bg-gray-400 text-white rounded cursor-not-allowed text-sm"
                            disabled
                          >
                            Kirim
                          </button>
                        ) : (
                          <button
                            className="px-3 py-2 bg-green-600 text-white rounded cursor-pointer text-sm hover:bg-green-500"
                            onClick={handleSubmitToWhatsApp}
                          >
                            Kirim
                          </button>
                        )
                    )
                )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
