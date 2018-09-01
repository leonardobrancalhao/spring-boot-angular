package com.leonardobrancalhao.financeiro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leonardobrancalhao.financeiro.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
	
	List<Categoria> findByNomeLikeOrderByNome(String nome);

}
