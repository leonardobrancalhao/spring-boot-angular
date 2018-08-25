package com.leonardobrancalhao.financeiro.service;

import java.util.List;

import com.leonardobrancalhao.financeiro.model.Categoria;
import com.leonardobrancalhao.financeiro.repository.CategoriaRepository;

public class CategoriaService {

	public List<Categoria> listar() {
		CategoriaRepository repository = new CategoriaRepository();
		return repository.listar();
	}

	public Categoria listar(Integer id) {
		if (id == null || id <= 0) {
			return null;
		}

		List<Categoria> lista = listar();

		for (Categoria categoria : lista) {
			if (categoria.getId().equals(id)) {
				return categoria;
			}
		}

		return null;
	}

	public void salvar(Categoria categoria) {
		if (categoria == null) {
			return;
		}

		if (categoria.getId() == null || categoria.getNome() == null) {
			return;
		}

		List<Categoria> lista = listar();

		boolean salvar = true;
		for (Categoria item : lista) {
			if (item.getId().equals(categoria.getId())) {
				salvar = false;
				System.out.println("Não cadastrou categoria, já exite o id: " + categoria.getId());
				break;
			}
		}

		if (salvar) {
			System.out.println("Categoria cadastrada com sucesso");
			lista.add(categoria);
		}

	}

}
