document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');

    // Danh sách các trang và nội dung có thể tìm kiếm
    const searchableContent = [
        {
            title: 'Trang chủ',
            content: 'Thanh Bút Chữ Vàng founders dự án văn học ươm mầm tài năng trẻ phát triển kỹ năng viết lách sáng tạo',
            description: 'Nơi ươm mầm những tài năng trẻ đam mê văn chương',
            tags: ['trang chủ', 'giới thiệu', 'founders', 'dự án'],
            url: 'index.html'
        },
        {
            title: 'Hiệu sách',
            content: 'sách hay review tư liệu văn học tác phẩm kinh điển sách mới xuất bản tác giả nổi tiếng',
            description: 'Kho tàng sách quý và những review chất lượng',
            tags: ['sách', 'review', 'tư liệu', 'văn học', 'đọc sách'],
            url: 'bookstore.html'
        },
        {
            title: 'Podcast',
            content: 'audio video chia sẻ văn học bài giảng phân tích tác phẩm bình luận văn học',
            description: 'Kênh chia sẻ kiến thức văn học qua âm thanh và hình ảnh',
            tags: ['podcast', 'audio', 'video', 'chia sẻ'],
            url: 'podcast.html'
        },
        {
            title: 'Học liệu',
            content: 'tài liệu học tập văn học bài giảng đề thi mẫu hướng dẫn viết văn kỹ năng sáng tác',
            description: 'Nguồn tài liệu phong phú cho người yêu văn học',
            tags: ['học liệu', 'tài liệu', 'bài giảng', 'đề thi'],
            url: 'resources.html'
        }
    ];

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            alert('Vui lòng nhập ít nhất 2 ký tự để tìm kiếm');
            return;
        }

        const results = searchableContent.filter(item => {
            return item.title.toLowerCase().includes(searchTerm) ||
                   item.content.toLowerCase().includes(searchTerm) ||
                   item.description.toLowerCase().includes(searchTerm) ||
                   item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        });

        displayResults(results, searchTerm);
    });

    function displayResults(results, searchTerm) {
        // Tạo modal hiển thị kết quả
        const modal = document.createElement('div');
        modal.className = 'search-modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'search-modal-content';

        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-button';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => modal.remove();

        const resultsList = document.createElement('div');
        resultsList.className = 'search-results';

        if (results.length === 0) {
            resultsList.innerHTML = `<p>Không tìm thấy kết quả cho "${searchTerm}"</p>`;
        } else {
            resultsList.innerHTML = `
                <h3>Kết quả tìm kiếm cho "${searchTerm}":</h3>
                ${results.map(result => `
                    <div class="search-result-item">
                        <a href="${result.url}">${result.title}</a>
                    </div>
                `).join('')}
            `;
        }

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(resultsList);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }
});